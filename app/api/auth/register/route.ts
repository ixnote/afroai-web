import { getConnection } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/lib/db/schema';
import bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { db } = await getConnection();
    const { email, password, ...rest } = await request.json();
    // Check if the user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database
    const newUser = await db.insert(users).values({
      ...rest,
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Return a success message
    return NextResponse.json(
      { message: 'User signed up successfully', user: { email } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}

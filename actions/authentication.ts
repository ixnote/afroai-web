'use server';

import { getConnection } from '@/lib/db';
import { users } from '@/lib/schema';
import { InferSelectModel, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { action } from '@/lib/safe-action';
import { flattenValidationErrors } from 'next-safe-action';

export type User = InferSelectModel<typeof users>;

const registerSchema = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(8).max(100),
});

export async function login(data: FormData) {
  const { db } = await getConnection();
  const nameValue = data.get('name');
  const emailValue = data.get('email');

  if (typeof nameValue !== 'string' || typeof emailValue !== 'string') {
    throw new Error('Name and email are not strings');
  }

  await db.insert(users).values({ name: nameValue, email: emailValue });

  revalidatePath('/');
}

export const register = action
  .schema(registerSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { username, password } }) => {
    const { db } = await getConnection();

    const result = await db
      .insert(users)
      .values({ name: username, email: password });

    revalidatePath('/');
    return { result: result[1] };
  });

export async function fetchUsers() {
  try {
    const { db } = await getConnection();
    const userResults: User[] = await db.select().from(users);
    return userResults;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}

export async function deleteUser(data: FormData) {
  const { db } = await getConnection();
  const userIdValue = data.get('userId');
  if (userIdValue === null || typeof userIdValue !== 'string') {
    throw new Error('User ID is missing or not a string from FormData');
  }
  const userId = parseInt(userIdValue, 10);

  if (typeof userId !== 'number') {
    throw new Error('User ID is not an integer');
  }

  try {
    await db.delete(users).where(eq(users.id, userId));
    revalidatePath('/');
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}

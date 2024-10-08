"use server";

import { getConnection } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { InferSelectModel, eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { action } from "@/lib/safe-action";
import { flattenValidationErrors } from "next-safe-action";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";

export type User = InferSelectModel<typeof users>;

const registerSchema = z.object({
  email: z.string().min(3).max(10),
  password: z.string().min(8).max(100),
});

export const login = action
  .schema(registerSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { email, password } }) => {
    const session = getServerSession();

    const { db } = await getConnection();

    const result = await db.select().from(users).where(eq(users.email, email));

    if (result.length === 0) {
      // Return user not foud error
    }

    // Compare user password
    const passwordsMatch = await bcrypt.compare(password, result[0].password);

    if (!passwordsMatch) {
    }

    revalidatePath("/");
    return { result: result[0] };
  });

export const register = action
  .schema(registerSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { email, password } }) => {
    const { db } = await getConnection();
  });

export const fetchUsers = action.action(async () => {
  try {
    const session = getServerSession();

    const { db } = await getConnection();

    const userResults: User[] = await db.select().from(users);
    return userResults;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
});

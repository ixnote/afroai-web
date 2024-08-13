import { mysqlTable, serial, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey().notNull(),
  email: varchar('email', { length: 256 }).unique('email').notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow(),
});

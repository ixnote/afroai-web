import {
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey().autoincrement().notNull(),
  username: varchar('username', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).unique('email').notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updatedAt', { mode: 'string' }).defaultNow(),
});

export const oauthProvider = mysqlTable('oauth_provider', {
  id: serial('id').primaryKey().autoincrement().notNull(),
  name: varchar('name', { length: 50 }).unique().notNull(),
  clientId: varchar('clientId', { length: 256 }).notNull(),
  clientSecret: varchar('clientSecret', { length: 256 }).notNull(),
});

export const userOauthAccount = mysqlTable('user_oauth_accout', {
  id: serial('id').primaryKey().autoincrement().notNull(),
  userId: int('user_id').references(() => users.id),
  providerId: int('provider_id').references(() => oauthProvider.id),
  providerUserId: varchar('provider_user_id', { length: 256 }).notNull(),
  accessToken: varchar('access_token', { length: 256 }).notNull(),
  refreshToken: varchar('refresh_token', { length: 256 }).notNull(),
  expiresAt: timestamp('expires_at', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow(),
});

export const aiModel = mysqlTable('ai_models', {
  id: serial('id').primaryKey().autoincrement().notNull(),
  name: varchar('name', { length: 256 }).unique().notNull(),
});

export const tokenUsage = mysqlTable('token_usage', {
  id: serial('id').primaryKey().autoincrement().notNull(),
  userId: int('user_id').references(() => users.id),
  modelId: int('model_id').references(() => aiModel.id),
  tokenUsed: int('token_used').default(0),
  tokenAvailable: int('token_available').default(0),
});

export const userSession = mysqlTable('user_sessions', {
  id: serial('id').primaryKey().autoincrement().notNull(),
  userId: int('user_id').references(() => users.id),
  sessionToken: varchar('session_token', { length: 256 }).unique().notNull(),
  expiresAt: timestamp('expires_at', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  lastActivity: timestamp('last_activity', { mode: 'string' }).defaultNow(),
});

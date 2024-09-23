import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
  decimal,
  boolean,
  json,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey().notNull(),
  username: varchar('username', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).unique('email').notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  isActive: boolean('is_active').default(true),

  createdAt: timestamp('createdAt', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updatedAt', { mode: 'string' }).defaultNow(),
});

export const oauthProvider = pgTable('oauth_provider', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 50 }).notNull(),
  clientId: varchar('clientId', { length: 256 }).notNull(),
  clientSecret: varchar('clientSecret', { length: 256 }).notNull(),
});

export const userOauthAccount = pgTable('user_oauth_accout', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id, {
    onDelete: 'cascade',
  }),
  providerId: integer('provider_id').references(() => oauthProvider.id, {
    onDelete: 'cascade',
  }),
  providerUserId: varchar('provider_user_id', { length: 256 }).notNull(),
  accessToken: varchar('access_token', { length: 256 }).notNull(),
  refreshToken: varchar('refresh_token', { length: 256 }).notNull(),
  expiresAt: timestamp('expires_at', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow(),
});

export const aiModel = pgTable('ai_models', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
});

export const tokenUsage = pgTable('token_usage', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => users.id),
  modelId: integer('model_id').references(() => aiModel.id),
  tokenUsed: integer('token_used').default(0),
  overFlowToken: integer('token_used').default(0), // To maintain some balance incase a request exceed the required token
  tokenAvailable: integer('token_available').default(0),
});

export const userSession = pgTable('user_sessions', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => users.id),
  sessionToken: varchar('session_token', { length: 256 })
    .unique('session_token')
    .notNull(),
  expiresAt: timestamp('expires_at', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  lastActivity: timestamp('last_activity', { mode: 'string' }).defaultNow(),
});

export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => users.id),
  modelId: integer('model_id').references(() => aiModel.id),
  transactionType: varchar('transaction_type', { length: 50 }).notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { enum: ['success', 'pending', 'failed'] }).default(
    'pending'
  ),
  metadata: json('metadata').default({}),
  transactionDate: timestamp('transaction_date', { mode: 'string' }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export const plans = pgTable('plans', {
  id: serial('id').primaryKey().notNull(),
  price: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  tokens: integer('token_used').default(0),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }),
});

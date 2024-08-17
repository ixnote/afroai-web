import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  migrations: {
    prefix: 'timestamp',
  },
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      'postgresql://afroaiuser:password123@localhost:5433/afroai?schema=public',
  },
  verbose: true,
  strict: true,
});

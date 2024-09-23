import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { Client } from 'pg';

export const getConnection = async () => {
  const connection = new Client({
    connectionString:
      process.env.DATABASE_URL ||
      'postgresql://afroaiuser:password123@localhost:5433/afroai?schema=public',
  });

  await connection.connect();
  const db = drizzle(connection, { schema });
  return { connection, db };
};

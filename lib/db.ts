import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/mysql2/migrator';

export const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });

  const db = drizzle(connection, { schema, mode: 'default' });

  await migrate(db, { migrationsFolder: 'drizzle' });
  await connection.end();

  return { connection, db };
};

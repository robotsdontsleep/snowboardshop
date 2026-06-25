Drizzle ORM Workflow

1. Install packages
npm install drizzle-orm
npm install better-sqlite3
npm install -D drizzle-kit


2. Create schema src/db/schema.ts

import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull().unique(),
});


3. Create Drizzle config drizzle.config.ts

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "./sqlite.db",
  },
});


4. Create database connection src/db/index.ts

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

const sqlite = new Database("sqlite.db");

export const db = drizzle(sqlite);


5. Generate migration
npx drizzle-kit generate

Creates migration files from your schema.

6. Apply migration
npx drizzle-kit migrate

7. Seed data (optional) src/db/seed.ts

import { db } from "./index";
import { users } from "./schema";

await db.insert(users).values({
  name: "John",
  age: 25,
  email: "john@example
  });


  npx tsx src/db/seed.ts


  8. Use database
  const allUsers = await db.select().from(users);

  await db.insert(users).values({
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  });
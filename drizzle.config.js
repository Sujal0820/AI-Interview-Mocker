/** @type { import("drizzle-kit").Config } */
export default {
    schema: './util/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:pwy3LGZP8dJa@ep-shrill-queen-a54479ul.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };
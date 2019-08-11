import dotenv from "dotenv";
import pgPromise from "pg-promise";

dotenv.config();
const configDB = {
  host: process.env.PGHOST || "localhost",
  database: process.env.PGDATABASE || "joejob",
  port: parseInt(process.env.PGPORT || "5432", 10),
  user: process.env.PGUSER || "joejob"
};
const pgp = pgPromise();
const db = pgp(configDB);

export default db;

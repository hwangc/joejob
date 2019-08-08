import dotenv from "dotenv";

dotenv.config();
const status: string = process.env.NODE_ENV || "development";
const port: string | number = process.env.SERVER_PORT || 4040;
const sessionSecret: string = process.env.SESSION_SECRET || "joejob_secret";

export { status, port, sessionSecret };

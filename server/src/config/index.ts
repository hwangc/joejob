import dotenv from 'dotenv'

dotenv.config();
const status = process.env.NODE_ENV;
const port: string | number = process.env.SERVER_PORT || 4040;

export {status, port}
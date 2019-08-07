import path from 'path'
import express from "express";
import dotenv from 'dotenv'

dotenv.config()
const status = process.env.NODE_ENV
const app: express.Application = express();
const port: string | number = process.env.SERVER_PORT || 4040

app.use(express.static(path.join(__dirname, '../dist/views')))

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../dist/views/index.html'))
});

app.listen(port, () => {
  console.log(`status: ${status}, server started at port: ${port}`);
});

import express from "express";
import dotenv from 'dotenv'

dotenv.config()
const app: express.Application = express();
const port: string | number = process.env.SERVER_PORT || 4040

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});

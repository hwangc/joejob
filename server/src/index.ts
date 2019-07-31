import path from 'path'
import express from "express";
import dotenv from 'dotenv'

dotenv.config()
const app: express.Application = express();
const port: string | number = process.env.SERVER_PORT || 4040

app.use(express.static(path.join(__dirname, '../dist/views')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/views/index.html'))
});

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});

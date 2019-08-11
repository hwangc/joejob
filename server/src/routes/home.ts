import express from "express";
import path from "path";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.render("home");
  // res.sendFile(path.join(__dirname, "../../dist/public/views/index.html"));
});

export default router;

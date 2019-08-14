import express from "express";

const router = express.Router();

router.post("/test/login", (req: express.Request, res: express.Response) => {
  console.log("::: req body :::", req.body);
  res.send("Welcome to Joejob");
});

export default router;

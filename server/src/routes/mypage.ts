import express from "express";
import path from "path";
import * as authChecker from "../middlewares/authChecker";

const router = express.Router();
router.use((req, res, next) =>
  authChecker.isAuthenticated(req, res, next, "/login")
);
router.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "../../dist/public/views/mypage.html"));
});

export default router;

import express from "express";
import passport from "passport";
import path from "path";
import * as authChecker from "../middlewares/authChecker";

const router = express.Router();

router.use((req, res, next) =>
  authChecker.isNotAuthenticated(req, res, next, "/mypage")
);
router.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "../../dist/public/views/login.html"));
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "mypage",
    failureRedirect: "login",
    failureFlash: true
  }),
  (req: express.Request, res: express.Response) => {
    res.send("Welcome to Joejob");
  }
);

export default router;

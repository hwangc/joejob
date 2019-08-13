import express from "express";
import passport from "passport";
import * as authChecker from "../middlewares/authChecker";

const router = express.Router();

router.use((req: express.Request, res: express.Response, next:express.NextFunction) =>
  authChecker.isNotAuthenticated(req, res, next, "/")
);
router.get("/", (req: express.Request, res: express.Response) => {
  res.render("login",{message:req.flash('error')})
  // res.sendFile(path.join(__dirname, "../../dist/public/views/login.html"));
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "login",
    failureFlash: true
  }),
  (req: express.Request, res: express.Response) => {
    res.send("Welcome to Joejob");
  }
);

export default router;

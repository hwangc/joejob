import express from "express";
import passport from "passport";
import * as authChecker from "../middlewares/authChecker";

const router = express.Router();

router.get("/", 
(req: express.Request, res: express.Response) => {
  if (!req.isAuthenticated()) {
    res.render("login",{message:req.flash('error')})
  } else {
    res.redirect("/")
  }
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/mypage",
    failureRedirect: "login",
    failureFlash: true
  })
);

export default router;

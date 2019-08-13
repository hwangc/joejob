import express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  if (req.isAuthenticated()) {
    res.render("home", { login: true, profile_photo: req.user.profile_photo });
  } else {
    res.render("home", { login: false, profile_photo: "" });
  }
});

export default router;

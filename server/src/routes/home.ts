import express from "express";
import passport from 'passport'
import noCache from '../middlewares/noCache'

const router = express.Router();

router.use((req: express.Request, res: express.Response, next:express.NextFunction) => {
  noCache(req, res, next)
})
router.get("/", (req: express.Request, res: express.Response) => {
  if (req.isAuthenticated()) {
    res.render("home", { login: true, profile_photo: req.user.profile_photo });
  } else {
    res.render("home", { login: false, profile_photo: "" });
  }
});

export default router;

import express from "express";

const router = express.Router();

router.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) { return next(err); }
      });
    }
    req.logout();
    res.redirect("/login");
  }
);

export default router;

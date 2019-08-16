import express from "express"
import path from "path"
import * as authChecker from "../middlewares/authChecker"
import User from "../model/user"
import noCache from '../middlewares/noCache'

const router = express.Router()
router.use((req: express.Request, res: express.Response, next:express.NextFunction) => {
  noCache(req, res, next)
})
router.get("/", (req: express.Request, res: express.Response) => {
  if(req.isAuthenticated()) {
    res.render("mypage", {...req.user, login:req.isAuthenticated()})
  } else {
    res.redirect("/login")
  }
})

export default router

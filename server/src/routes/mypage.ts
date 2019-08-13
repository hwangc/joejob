import express from "express"
import path from "path"
import * as authChecker from "../middlewares/authChecker"
import User from "../model/user"

const router = express.Router()
router.use((req: express.Request, res: express.Response, next:express.NextFunction) =>
  authChecker.isAuthenticated(req, res, next, "/login")
)
router.get("/", (req: express.Request, res: express.Response) => {
  res.render("mypage", {...req.user})
})

export default router

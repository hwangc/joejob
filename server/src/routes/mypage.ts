import express from "express"
import path from "path"
import * as authChecker from "../middlewares/authChecker"
import User from "../model/user"

const router = express.Router()
router.use((req, res, next) =>
  authChecker.isAuthenticated(req, res, next, "/login")
)
router.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.user)
  res.render("home", { profile_photo: req.user.profile_photo })
  /* res.send(`
  <img src="${req.user.profile_photo}">
  <h1>Hello ${req.user.username} :)</h1>
  <ul>
    <li>height: ${req.user.height}</li>
    <li>weight: ${req.user.weight}</li>
    <li>age: ${req.user.age}</li>
    <li>mobile: ${req.user.mobile_number}</li>
  </ul>
		<div>
			<a href="/">home</a>
			<a href="/logout">logout</a>
		</div>`); */
  // res.sendFile(path.join(__dirname, "../../dist/public/views/mypage.html"));
})

export default router

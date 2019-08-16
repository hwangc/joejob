import express from "express";
import expressGraphql from 'express-graphql'
import schema from '../graphql'
import * as authChecker from "../middlewares/authChecker";

const router = express.Router();
router.use((req: express.Request, res: express.Response, next:express.NextFunction) => {
  authChecker.redirectIfNotAuthenticated(req, res, next, "/login")
})
router.use("/", expressGraphql({schema, graphiql: true}))

export default router
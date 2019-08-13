import express from "express";
import expressGraphql from 'express-graphql'
import schema from '../graphql'

const router = express.Router();
router.use("/", expressGraphql({schema, graphiql: true}))

export default router
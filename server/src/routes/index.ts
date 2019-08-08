import express from 'express'
import homeRoute from './home'

const registerRoutes = (app: express.Application) => {
  app.use('/', homeRoute)
}

export default registerRoutes
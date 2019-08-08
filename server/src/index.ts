import express from "express";
import registerRoutes from './routes'
import configApp from './config/express'
import * as config from './config'

const app: express.Application = express();

// Config App
configApp(app)
// Register routes
registerRoutes(app)

app.listen(config.port, () => {
  console.log(`status: ${config.status}, server started at port: ${config.port}`);
});

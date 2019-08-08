import express from "express";
import passport from "passport";
import configApp from "./config/app";
import configAuth from "./config/auth";
import * as configEnv from "./config/env";
import configRoutes from "./routes";

const app: express.Application = express();
const auth: passport.PassportStatic = passport;

// Config App
configApp(app);
// Config auth
configAuth(auth);
// Config routes
configRoutes(app);

app.listen(configEnv.port, () => {
  console.log(
    `Server status: ${configEnv.status} & running on port: ${configEnv.port}`
  );
});

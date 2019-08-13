import flash from "connect-flash";
import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import passport from "passport";
import path from "path";
import * as configEnv from "./env";

const configApp = (app: express.Application) => {
  // Set template engine
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));
  // public static path
  app.use(express.static(path.join(__dirname, "../views")));
  // config express to parse incoming JSON data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(flash());
  // config cookieParser
  app.use(cookieParser());
  app.use(
    session({
      secret: configEnv.sessionSecret,
      resave: false,
      cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 },
      saveUninitialized: true
    })
  );
  // config passport
  app.use(passport.initialize());
  app.use(passport.session());
};

export default configApp;

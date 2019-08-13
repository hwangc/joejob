import express from "express";
import homeRoute from "./home";
import loginRoute from "./login";
import logoutRoute from "./logout";
import mypageRoute from "./mypage";
import graphqlRoute from "./graphql";

const configRoutes = (app: express.Application) => {
  app.use("/", homeRoute);
  app.use("/login", loginRoute);
  app.use("/mypage", mypageRoute);
  app.use("/logout", logoutRoute);
  app.use("/graphql", graphqlRoute);
};

export default configRoutes;

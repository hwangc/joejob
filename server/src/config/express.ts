import express from "express";
import path from 'path'

const configApp = (app:express.Application) => {
  // public static path
  app.use(express.static(path.join(__dirname, "../../dist/public/views")));
  // config express to parse incoming JSON data
  app.use(express.json());
};

export default configApp

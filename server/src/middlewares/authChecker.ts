import express from "express";

const isAuthenticated = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
  redirect?: string
) => {
  if (req.isAuthenticated()) {
    console.log("::: authenticated :::");
    return next();
  }
  console.log("::: not authenticated & redirect :::");
  if (redirect) {
    res.redirect(redirect);
  } else {
    res.redirect("/");
  }
};

const isNotAuthenticated = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
  redirect?: string
) => {
  if (req.isAuthenticated()) {
    console.log("::: authenticated & redirect :::");
    if (redirect) {
      res.redirect(redirect);
    } else {
      res.redirect("/");
    }
  } else {
    console.log("::: not authenticated :::");
    return next();
  }
};
export { isAuthenticated, isNotAuthenticated };

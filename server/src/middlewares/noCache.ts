import express from 'express'

const noCache = (req:express.Request, res:express.Response, next:express.NextFunction) => {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
};

export default noCache
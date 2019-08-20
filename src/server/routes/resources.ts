import httpStatus from 'http-status';
import { Express } from 'express';

export default (app: Express, urls: string[]) => {
  app.get('/resources', (req, res) => {
    res.status(httpStatus.OK).json({ resources: urls });
  });

  return app;
};

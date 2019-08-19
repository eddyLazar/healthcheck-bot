import path from 'path';
import express from 'express';

export default (app: express.Express) => {
  app.get('/', function(req, res) {
    res.sendFile(path.join(`${__dirname}/../../webapp/index.html`));
  });

  app.use(express.static(`${__dirname}/../../webapp`));

  return app;
};

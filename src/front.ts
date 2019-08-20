import dotenv from 'dotenv';
import Bundler from 'parcel-bundler';
import healthCheckRoute from './server/routes/health-check';
import resourceRoutes from './server/routes/resources';
import makeRequest from './server/lib/makeRequest';
import express from 'express';
dotenv.config();
// eslint-disable-next-line
import config from './config';

const app = express();

healthCheckRoute(app, makeRequest);
resourceRoutes(app, config.urls);

const file = 'src/front/index.html';
const options = {};
const bundler = new Bundler(file, options);
const middleware = bundler.middleware();

app.use(middleware);

app.listen(3000);

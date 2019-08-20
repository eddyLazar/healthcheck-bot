import Bundler from 'parcel-bundler';
import healthCheckRoute from './server/routes/health-check';
import makeRequest from './server/lib/makeRequest';
import express from 'express';

const app = express();

healthCheckRoute(app, makeRequest);

const file = 'src/front/index.html';
const options = {};
const bundler = new Bundler(file, options);
const middleware = bundler.middleware();

app.use(middleware);

app.listen(3000);

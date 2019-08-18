import config from './config';
import Bundler from 'parcel-bundler';
import healthCheckRoute from './server/routes/health-check';
import makeRequest from './server/lib/makeRequest';
import express from 'express';

const app = express();

const file = 'src/front/index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
const middleware = bundler.middleware();

app.use((req, res, next) => {
  if (req.path.includes('health-check')) {
    next();
  } else {
    middleware(req, res, next);
  }
});

healthCheckRoute(app, makeRequest);

// @ts-ignore-line
app.get('/hello', (req, res) => {
  res.send('Hello world update was great\n');
});

// Listen on port 8080
app.listen(config.port);

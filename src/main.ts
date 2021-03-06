import dotenv from 'dotenv';
import validateConfig from './config/validate-config';
dotenv.config();
validateConfig(process.env);
// eslint-disable-next-line
import config from './config';
// eslint-disable-next-line
import bootstrap from './server/bootstrap';
// eslint-disable-next-line
import Bundler from 'parcel-bundler';

const { app, job } = bootstrap();

setInterval(job, config.timeout);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);

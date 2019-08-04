import config from './config';
import bootstrap from './bootstrap';

const { app, job } = bootstrap();

setInterval(job, config.timeout);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);

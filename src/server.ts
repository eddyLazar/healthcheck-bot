import express from 'express';
import concat from './somemodule/concat';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(concat('hello ', 'world')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

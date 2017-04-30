import * as express from 'express';
import path = require('path');
import open = require('open');

const port = 3000;
const app = express();

app.get('/', (req, res) =>
  res.sendfile(path.join(__dirname, '../src/index.html'))
);

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
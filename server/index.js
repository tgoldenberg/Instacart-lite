require('babel-register');
require('babel-polyfill');

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });

const nextHandle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();
  server.use(morgan('tiny'));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return nextHandle(req, res);
  });
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  })
})

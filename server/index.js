const express = require('express');
const webpack = require('webpack');
const path = require('path');
const wpconfig = require('../webpack.config.dev');
const open = require('open');
const bodyparser = require('body-parser');
const passport = require('passport');
const appmodules = require('./app');


/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(wpconfig);
//serve bunde from memory
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: wpconfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


// Initialize passport for use
app.use(passport.initialize());


// Bring in defined Passport Strategy
appmodules.auth(passport);
app.use('/api', require('./app').router);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

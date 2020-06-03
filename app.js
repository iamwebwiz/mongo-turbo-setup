// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const express = require('express');

const app = express();

const config = {
  views: 'views',
  static: 'public',
  logging: true,
  db: {
    url: 'mongodb://localhost/mongo-turbo',
    type: 'mongo',
    onError: (err) => {
      console.log('DB connection failed!');
    },
    onSuccess: () => {
      console.log('DB connection successful!');
    },
  },
};

vertex.configureApp(app, config);
app.use(vertex.setContext(process.env));

// import routes
const index = require('./routes/index');
const api = require('./routes/api');

// set routes
app.use('/', index);
app.use('/api', api); // sample API Routes

module.exports = app;

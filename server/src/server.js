import express from 'express';
import path from 'path';
import morgan from 'morgan';
import db from '../database/connection.js';
import passport from 'passport';
import client from '../../twilioClient.js';

import services from './services';
// import testRouteHandlers from './testRouteHandlers';

export default function (app) {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  const publicPath = path.join(__dirname, '../../client/public/');
  app.use(express.static(publicPath));

  app.get('/joinMe', function () {
    client.sendSms('5043174866', 'blue nile');
    console.log('route hit');
  });
// app.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

  app.get('/api/v1/search', services.handleYelpSearch);
  // app.get('/api/v1/search', testRouteHandlers.fakeYelpSearch);
}

// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'EnigmaSecure',
  keys: [ 'NIGHTMAREONELMSTREET', 'THESOUNDOFMUSIC' ]
}));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/sass',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const storiesApiRoutes = require('./routes/stories-api')
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const db = require('./db/connection');

const userQueries = require('./db/queries/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/stories', storiesApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// Some variables... for now...
const noUser = { user: { id: null } };

const setTemplateVars = async(request) => {
  const templateVars = {};
  const sessionsId = request.session.id;
  const paramsId = request.params.id;
  const email = request.body.email;

  let user;
  // console.log('setTemplateVars, request.params : ', request.params);
  if (!sessionsId && !paramsId) {
    if (email) {
      user = await userQueries.getUserByEmail(email);
      if (user) {
        request.session.id = user.id;
      }
      return user ? { user } : noUser;
    }
    console.log('!request');
    return noUser;
  }
  console.log(`!request.session, just before, request.session`, request.session);
  console.log(`!request.session, just before, request.params`, request.params);
  if (!sessionsId) {
    user = await userQueries.getUser(paramsId);
    if (user) {
      request.session.id = paramsId;
    }
    return user ? { user } : noUser;
  }
  console.log('setTemplateVars passed the ifs');
  user = await userQueries.getUserByRequest(request);
  console.log('setTemplateVars after the user instantiationations : ', user);
  return user ? { user } : noUser;
};

app.get('/', async(request, response) => {
  console.log('root / request', request.session);
  const templateVars = await setTemplateVars(request);
  response.render('index', templateVars);
});

/// Temp login/logout routes
app.post('/login', (request, response) => {
  console.log(request.body);
  response.render('index', noUser);
});
app.get('/login/:id', async(request, response) => {
  console.log(`login/:id request.params`, request.params);
  const templateVars = await setTemplateVars(request);
  response.render('index_old', templateVars);
});
app.get('/logout', async(request, response) => {
  request.session = null;
  response.render('index_old', noUser);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

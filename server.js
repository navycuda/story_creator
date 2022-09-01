// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

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
  "/styles",
  sassMiddleware({
    source: __dirname + "/sass",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const userApiRoutes = require('./routes/api/users/usersRouter');
// const storiesApiRoutes = require('./routes/stories-api');
// const widgetApiRoutes = require('./routes/widgets-api');


const apiRoutes = require('./routes/api/apiRouter');

const usersRoutes = require('./routes/users');
const db = require('./db/connection');

const userQueries = require('./db/queries/userQueries');

/////
// const login = require("./routes/login");
// const registerRoute = require("./routes/register");
// const popularRoute = require("./routes/popular");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/api', apiRoutes);
// app.use('/api/users', userApiRoutes);
// app.use('/api/stories', storiesApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
// app.use('/users', usersRoutes);




/////
// app.use("/login", login);
// app.use("/register", registerRoute);
// app.use("/popular", popularRoute);

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
    return noUser;
  }
  if (!sessionsId) {
    user = await userQueries.getUser(paramsId);
    if (user) {
      request.session.id = paramsId;
    }
    return user ? { user } : noUser;
  }
  user = await userQueries.getUserByRequest(request);
  return user ? { user } : noUser;
};

app.get('/', async(request, response) => {
  const templateVars = await setTemplateVars(request);
  response.render('index', templateVars);
});




/// Temp login/logout routes

// app.get('/html', (request, response) => {
//   const html = `
//     <p>
//       IMPORTED HTML FROM API
//     </p>
//   `;
//   response.render('partials/_footer');
// });


// app.post('/login', async(request, response) => {
//   await setTemplateVars(request);
//   response.redirect('/');
// });
// app.get('/login/:id', async(request, response) => {
//   console.log(`login/:id request.params`, request.params);
//   const templateVars = await setTemplateVars(request);
//   response.render('index_old', templateVars);
// });
// app.get('/logout', async(request, response) => {
//   request.session = null;
//   response.redirect('/');
// });


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = {
  setTemplateVars
};

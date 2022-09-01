const noUser = { user: { id: null } };
const userQueries = require('./db/queries/userQueries');


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

module.exports = {
  setTemplateVars,
  noUser
};

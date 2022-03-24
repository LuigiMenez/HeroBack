const jdrRouter = require('./jdr');
const userAuth = require('./users');

const setupRoutes = (app) => {
  app.use('/', jdrRouter);

  app.post('/auth/signup', userAuth);
  app.post('/auth/login', userAuth);
};

module.exports = { setupRoutes };

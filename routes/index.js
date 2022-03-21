const jdrRouter = require('./jdr');
const userAuth = require('./users');

const setupRoutes = (app) => {
  app.use('/', jdrRouter);

  app.post('/auth/signup', userAuth);
};

module.exports = { setupRoutes };

const jdrRouter = require('./jdr');

const setupRoutes = (app) => {
  app.use('/', jdrRouter);
};

module.exports = { setupRoutes };

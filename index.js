const express = require('express');
const cors = require('cors');
const { backPort } = require('./config');
const { setupRoutes } = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

setupRoutes(app);

app.listen(backPort, () => {
  console.log(`Bienvenue sur HerosBox http://localhost:${backPort} !`);
});

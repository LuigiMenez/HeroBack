const jdrRouter = require('express').Router();
const { db } = require('../config');

jdrRouter.get('/', async (req, res) => {
  try {
    const sql = `SELECT id, name, image, nameimg FROM jdr ORDER BY name`;
    const [jdrs] = await db.query(sql);
    res.status(200).json(jdrs);
  } catch (err) {
    res.status(400).res(err);
  }
});

module.exports = jdrRouter;

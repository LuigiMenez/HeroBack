const userAuth = require('express').Router();
const { db } = require('../config');

userAuth.post('/auth/signup', async (req, res) => {
  try {
    const { email, password, userName } = req.body;
    const [rows] = await db.query(
      `
  INSERT INTO users (login, mail, password) VALUES (?, ?, ?)`,
      [userName, email, password]
    );
    const user = {
      id: rows.insertId,
      userName,
    };
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send('Login, ou Password déjà connue!!');
  }
});

module.exports = userAuth;

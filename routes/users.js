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
      email,
      userName,
    };
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send('Login, ou Email déjà connue!!');
  }
});

userAuth.post('/auth/login', async (req, res) => {
  try {
    const { password, userName } = req.body;
    const [rows] = await db.query(
      `
  SELECT login, password FROM users WHERE login=? AND password=? `,
      [userName, password]
    );
    // const user = {
    //   id: rows.insertId,
    //   email,
    //   userName,
    // };
    res.status(201).json(rows);
  } catch (err) {
    res.status(500).send('Login, ou Email déjà connue!!');
  }
});

module.exports = userAuth;

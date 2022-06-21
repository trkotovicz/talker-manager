const token = require('../helpers/token');

function emailValidation(email, res) {
  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;

  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
}

function passwordValidation(password, res) {
  if (!password || password === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
}

function login(req, res) {
  const { email, password } = req.body;

  emailValidation(email, res);
  passwordValidation(password, res);

  return res.status(200).json({ token: token(16) });
}

module.exports = login;
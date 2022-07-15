const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const JWT_SECRET_PATH = path.join(__dirname, '../../jwt.evaluation.key');
const JWT_SECRET_KEY = fs.readFileSync(JWT_SECRET_PATH);

function sign(payload) {
  return jwt.sign(payload, JWT_SECRET_KEY);
}

function verify(payload) {
  return jwt.verify(payload, JWT_SECRET_KEY);
}

module.exports = {
  sign,
  verify,
};

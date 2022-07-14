const md5 = require('md5');
const jwt = require('jsonwebtoken');

const { user: User } = require('../database/models');

const secretKey = 'secret_key';

const loginServices = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return new Error('User not find');
  }

  const cryptPassword = md5(password);

  if (user.password !== cryptPassword) {
    return new Error('Email or Password wrong');
  }
  const token = jwt.sign(JSON.stringify(user), secretKey);

  return { 
    name: user.name, 
    email: user.email,
    role: user.role,
    token, 
    };
};

const registerServices = async (name, email, password, role) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return new Error('Registered user');
  }

  const cryptPassword = md5(password);

  const userCreated = await User.create({ name, email, password: cryptPassword, role });

  if (!userCreated) {
    return new Error('A error to create User');
  }

  return userCreated;
};

const getAll = async () => {
  const users = await User.findAll();
  if (!users) {
    return new Error('no user found');
  }

  return users;
};

const getOne = async (token) => {
  const { email } = jwt.verify(token, secretKey);
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return new Error('User not found');
  }

  return user;
};

module.exports = {
  loginServices,
  getAll,
  registerServices,
  getOne,
};

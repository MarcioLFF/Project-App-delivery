const services = require('../services/usersServices');

const loginControllers = async (req, res) => {
  const { email, password } = req.body;
  const user = await services.loginServices(email, password);
  if (user instanceof Error) {
    return res.status(400).json({ message: user.message });
  }

  res.status(200).json(user);
};

const registerControllers = async (req, res) => {
  const { name, email, password, role } = req.body;

  const createUser = await services.registerServices(name, email, password, role);

  if (createUser instanceof Error) {
    return res.status(400).json({ message: createUser.message });
  }

  res.status(200).json(createUser);
};

const getAll = async (_req, res) => {
  const getUsers = await services.getAll();

  if (getUsers instanceof Error) {
    return res.status(400).json({ message: getUsers.message });
  }

  res.status(200).json(getUsers);
};

const getOne = async (req, res) => {
  const { token } = req.headers;
  const getUser = await services.getOne(token);

  if (getUser instanceof Error) {
    return res.status(400).json({ message: getUser.message });
  }

  res.status(200).json(getUser);
};

module.exports = {
  loginControllers,
  getAll,
  registerControllers,
  getOne,
};

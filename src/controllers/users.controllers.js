const { UsersServices } = require('../services');



const createUser = async(req, res, next) => {
  try {
    const body = req.body;
    const result = await UsersServices.postUser(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};
const readUsers = async(req, res, next) => {
  try {
    const result = await UsersServices.getUsers();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};
const readUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};
const updateUser = async(req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await UsersServices.updateUser(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};
const deleteUser = async(req, res, next) => {
  try {
    const { id } = req.params
    const result = await UsersServices.deleteUser(id);
    res.status(200).json({message: "Elemento eliminado"});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

module.exports = {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
}
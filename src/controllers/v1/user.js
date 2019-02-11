const debug = require('debug')('app:controllers:v1:index');

const UserService = require('../../services/v1/user');

const UserController = {

  index: async (req, res) => {
    debug('executing index action');

    const example = await UserService.example();
    res.status(200).send(example);
  },
  list: async (req, res) => {
    debug('executing list action');

    const userList = await UserService.list();
    res.status(200).send(userList);
  }

};

module.exports = UserController;

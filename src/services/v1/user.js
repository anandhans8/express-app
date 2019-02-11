const debug = require('debug')('app:services:v1:index');
const db = require('../../models');
const UserModel = db.User;

const UserService = {

  example: async () => {
    debug('executing example method');
    await UserModel.create({
      userName: 'anandhan', firstName: 'anandhan', lastName: 'suruli', email: 'anandhan.suruli@integra.co.in', passwordHash: 'admin', isActive: true
    });

    return Promise.resolve('example');
  },
  list: async() => {
    debug('List of all users');

    let userList = await UserModel.findAll()
      .then(users => users);
    return userList;
  }

};

module.exports = UserService;

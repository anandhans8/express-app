const debug = require('debug')('app:routes:v1:example');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const UserController = require('../../controllers/v1/user');

router.route('/')
  .post(UserController.index);
  
router.route('/')
  .get(UserController.list);

module.exports = router;

const debug = require('debug')('app:routes:v1');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const user = require('./user');

router.use('/user', user);

module.exports = router;

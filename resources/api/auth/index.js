const express = require('express');
const router = express.Router();

const loginRoutes = require('./login');
const logoutRoutes = require('./logout');

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);


module.exports = router;
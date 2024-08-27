const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const calendarRoutes = require('./calendar');
const usersRoutes = require('./users');

router.use('/auth', authRoutes);
router.use('/calendar', calendarRoutes);
router.use('/users', usersRoutes);


module.exports = router;
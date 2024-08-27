const express = require('express');
const router = express.Router();

const healthcheckRoutes = require('./healthcheck');
const projectsRoutes = require('./projects');

router.use('/healthcheck', healthcheckRoutes);
router.use('/projects', projectsRoutes);


module.exports = router;
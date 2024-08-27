const express = require('express');
const resources = express.Router();

const apiRoutes = require('./api');

resources.use('/api', apiRoutes);

resources.get('/', (req, res) => {
  res.render('index', { title: 'Calendar' })
});

module.exports = resources;
// routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

// routes.js
router.get('/index', (req, res) => {
    res.render('index');
  });

module.exports = router;


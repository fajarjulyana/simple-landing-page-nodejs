const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('kontak.ejs');
});

module.exports = router;

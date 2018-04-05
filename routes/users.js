var express = require('express');
var router = express.Router();
let db = require('../db/queries')

/* GET users listing. */
router.get('/', db.getAllUsers);

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    'use strict';
    res.json([{
        id:1,
        username: "one"
    }, {
        id:2,
        username: "two"
    }]);
});


module.exports = router;

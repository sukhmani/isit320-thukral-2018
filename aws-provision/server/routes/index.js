var express = require('express');
const getAwsInstanceParams = require('./aws/getAwsInstanceParams')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

/* Set up a route called foo. */
router.get('/create-educate', function(request, response) {
  const awsInstanceParams = getAwsInstanceParams.awsEducate();
  createInstance(awsInstanceParams);
    //response.send(message);
});

module.exports = router;

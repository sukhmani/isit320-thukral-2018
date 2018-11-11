var express = require('express');
const getAwsInstanceParams = require('./aws/GetAwsInstanceParams')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

/* Set up a route called foo. */
router.get('/awsEducate', function(request, response) {
  const awsInstanceParams = getAwsInstanceParams.awsEducate();
  createInstance(awsInstanceParams);
    response.send({result: 'success'});
});

/* Set up a route called foo. */
router.get('/createWithAwsStandardAccount', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.createWithAwsStandardAccount();
    createInstance(awsInstanceParams);
    response.send({result: 'success'});
});
module.exports = router;
/* Set up a route called foo. */
router.get('/associateElasticIp', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.associateElasticIp();
    createInstance(awsInstanceParams);
    response.send({result: 'success'});
});
module.exports = router;
/* Set up a route called foo. */
router.get('/copyGetStarted', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.copyGetStarted();
    createInstance(awsInstanceParams);
    response.send({result: 'success'});
});
/* Set up a route called foo. */
router.get('/runGetStarted', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.runGetStarted();
    createInstance(awsInstanceParams);
    response.send({result: 'success'});
});
/* Set up a route called foo. */
router.get('/removeKnownHost', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.removeKnownHost();
    createInstance(awsInstanceParams);
    response.send({result: 'success'});
});
module.exports = router;

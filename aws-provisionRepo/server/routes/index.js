var express = require('express');
// const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});
router.get('/foo', function(req, res) {

    'use strict';

    res.send({ title: 'RestExpress', query: req.query, params: req.params });

});




router.get('/createEducate', function(request, response) {
//    createInstance(awsInstanceParams);
    response.send({ result: 'success', route: '/createEducate' });
});
module.exports = router;

/*
let withAwsStandardAccount = router.get('/createWithAwsStandardAccount', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.createWithAwsStandardAccount();
    // createInstance(awsInstanceParams);
    response.send({ result: 'success',
        route:'getAwsInstanceParams'
    });
});
module.exports = router;
/!* Set up a route called foo. *!/
router.get('/associateElasticIp', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.associateElasticIp();
    createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});

/!* Set up a route called foo. *!/
router.get('/copyGetStarted', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.copyGetStarted();
    createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});
/!* route called runGetStarted. *!/
router.get('/runGetStarted', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.runGetStarted();
    createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});
/!*route called removeKnownHost. *!/
let removeKnownHost = router.get('/removeKnownHost', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.removeKnownHost();
    //createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});*/


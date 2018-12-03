var express = require('express');
var router = express.Router();

router.use(express.static('public'));
/* GET home page. */

//const  routes = require ('./routes');

//module.exports = () => {
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});
//};

//app.listen(PORT, () =>{
//  console.log('${PORT}');
//});
module.exports = router;

var express = require('express');
var router = express.Router();

router.use(express.static('public'));
/* GET home page. */

//const  routes = require ('./routes');

//module.exports = () => {
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server', author: 'sukhmani' });
});
//};

//app.listen(PORT, () =>{
//  console.log('${PORT}');
//});
router.get('/foo', (request, response) => {
    'use strict';
    response.send({ file: 'api.js',  result: 'success', status: 'bar' });
});
module.exports = router;

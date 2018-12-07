

/* GET users listing. */
import * as router from 'aws-sdk';

router.get('/', function(req, res) {
    'use strict';
    res.json([{
        id:1,
        username: 'one'
    }, {
        id:2,
        username: 'two'
    }]);
});


var CreateAssociate;
module.exports = CreateAssociate;
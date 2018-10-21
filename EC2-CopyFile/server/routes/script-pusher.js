var express = require('express');
var router = express.Router();


router.get('/foo', (request, response) =>{
  const result = {result:'success'};
  response.send(result);
});
module.exports = router;
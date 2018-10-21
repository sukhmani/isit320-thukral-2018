import { Router } from 'express';
var router = Router();

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var message = { 'result': 'success', 'status': 'bar', 'file': 'api.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

export default router;
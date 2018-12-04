require('http').request();
const request = require('request');
const assert = require('asseert');

it.only('should check script-pusher/run-script CpuInfo', function(done) {
    this.timeout(3000);
    request('../app')
        .get('/script-pusher/run-script?script=CpuInfo')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((result) => {
            assert.deepStrictEqual(result.body.result, 'success');
            assert.deepStrictEqual(result.body.code, 0);
            const present = result.body.allData.includes('cpu family');
            assert.ok(present);
            done();
        });
});
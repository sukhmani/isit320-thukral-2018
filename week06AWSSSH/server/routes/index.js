var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;

/*let response ='';*/
let allData = '';

const runCpuInfo = (hostAddress, response) => {
    /*const hostAddress = '23.23.25.214';*/
    var conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('~/CpuInfo', function(err, stream) {
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'Stream :: close :: code: ' +
                            code +
                            ', signal: ' +
                            signal
                    );
                    conn.end();
                    response.send({ result: 'success', allData: allData });
                })
                .on('data', function(data) {
                    console.log('STDOUT: ' + data);
                    allData += data;
                })
                .stderr.on('data', function(data) {
                    console.log('STDERR: ' + data);
                    allData += data;
                });
        });
    }).connect({
        host: hostAddress,
        port: 22,
        username: 'ubuntu',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/new.pem'
        )
    });
    runCpuInfo(hostAddress, response);
};
/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});

module.exports = router;

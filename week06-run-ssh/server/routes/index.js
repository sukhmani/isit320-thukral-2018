var express = require('express');
var router = express.Router();
const Client = require('ssh2').Client;
/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

const hostAddress = '23.23.25.214';

let allData = '';

const runCpuInfo = (hostAddress, response) => {
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
        username: 'bcuser',
        privateKey: require('fs').readFileSync(
            process.env.HOME + '/.ssh/new.pem'
        )
    });
};
runCpuInfo(hostAddress, response);

module.exports = router;

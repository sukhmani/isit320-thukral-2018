var express = require('express');
const Client = require('ssh2').Client;
const hostAddress = '23.23.25.214';
//const elfUtils = require('elven-code').elfUtils;
const router = express.Router();

let allData = '';
const runCpuUptime = (hostAddress, identityFile, response) => {
    var con = new Client();
    con.on('ready', function() {
        console.log('Client :: ready');
        con.exec('/usr/bin/uptime', function(err, stream) {
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'stream :: close :: code: ' + code + ',signal' + signal
                    );

                    con.end();
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
};

const runCpuInfo = (hostAddress, input, response) => {
    var conn = new Client();
    conn.on('ready', function() {
        console.log('Client :: ready');
        conn.exec('~/Git/JsObjects/Utilities/SetupLinuxBox/' + input, function(
            err,
            stream
        ) {
            if (err) throw err;
            stream
                .on('close', function(code, signal) {
                    console.log(
                        'stream :: close :: code: ' + code + ',signal' + signal
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
};

//let router = '';
//runCpuInfo.get('/uptime', function(request, response) {
//   console.log('run-get-started called in ssh-runner', hostAddress);
//});
router.get('/runCpuUptime', function(request, response) {
    allData = '';
    runCpuUptime(hostAddress, request.query.script, response);
    //console.log('run-get-started called in ssh-runner', hostAddress);
});
router.get('/runCpuInfo', function(request, response) {
    allData = '';
    runCpuInfo(hostAddress, request.query.script, response);
    //console.log('run-get-started called in ssh-runner', hostAddress);
});

module.exports = router;

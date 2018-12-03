let express = require('express');

const Client = require('ssh2').Client;

const hostAddress = '23.23.25.214';

const router = express.Router();

const elfUtils = require('elven-code').elfUtils;

let allData = '';

const getSshIp = () => {
    return new Promise(function(resolve, reject) {
        elfUtils
            .readFile(process.env.HOME + '/.ssh/config')

            .then(content => {
                //var pattern = new RegExp('Host ec2-bc[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)');

                var pattern = new RegExp(
                    'Host ec2-bc\n\t(.*)\n\t(.*)\n\t(.*)\n\t(.*)'
                );

                const result = {};

                const match = content.result.match(pattern);

                for (let i = 1; i < 5; i++) {
                    if (match[i].startsWith('HostName')) {
                        var hostPattern = new RegExp('HostName\\s(.*)');

                        result.hostName = match[i].match(hostPattern)[1];
                    }

                    if (match[i].startsWith('IdentityFile')) {
                        const idPattern = new RegExp('IdentityFile\\s(.*)');

                        const path = match[i].match(idPattern)[1];

                        result.identityFile = path.substring(
                            path.lastIndexOf('/') + 1,
                            path.length
                        );
                    }
                }

                resolve(result);
            })

            .catch(reject);
    });
};
/*.connect({

    host: hostAddress,

    port: 22,

    username: 'ubuntu',

    privateKey: require('fs').readFileSync(

        process.env.HOME + '/.ssh/ElfWest.pem'

    )

});*/

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

router.get('/uptime', function(request, response) {
    console.log('run-get-started called in ssh-runner', hostAddress);

    getSshIp()
        .then(result => {
            runCpuUptime(result.hostName, result.identityFile, response);
        })

        .catch(err => {
            response.send(err);
        });
});

module.exports = router();

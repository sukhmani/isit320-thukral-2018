const express = require('express');
const router = express.Router();

//var router = Router();
let allData = '';
const spawn = require('child_process').spawn;

const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['CpuInfo', 'VersionCheck', 'uptime'];
    if (request.query.script) {
        console.log('INSIDE REQUEST SCRIPT');
        if (!validOptions.includes(request.query.script)) {
            console.log('INSIDE REQUEST INVALID OPTION');
            response.send({
                result: 'error',
                error: 'Invalid Option: ' + request.query.script,
                script: request.query.script
            });
            return;
        }
    }
    next();
};

router.use(check);
//router.use(allData);
//let allData = '';
const copyFile = () => {
    return new Promise(function(resolve, reject) {
        console.log('Copy to EC2', process.env.SETUP_LINUXBOX);

        const pushScript = spawn('scp', [
            process.env.SETUP_LINUXBOX + '/CpuInfo',
            /* const pushScript = spawn(process.env.SETUP_LINUXBOX + '/CpuInfo' + script);*/
            'ec2-bc:/home/ubuntu'
        ]);

        pushScript.stdout.on('data', data => {
            //console.log(`child stdout:\n${data}`);

            allData += 'PUSH-SCRIPT: ' + data;

            console.log('PUSH', data);
        });

        pushScript.stderr.on('data', data => {
            // console.log(`child stderr:\n${data}`);
            allData = 'PUSH-SCRIPT: ' + data;

            //console.error('PUSH', data);
        });

        pushScript.on('close', code => {
            resolve({
                result: 'success',

                code: code
            });
        });

        pushScript.on('error', code => {
            reject({
                result: 'error',

                code: code
            });
        });
    });
};
router.use(copyFile);

router.get('/copyFile', (request, response) => {
    const result = { result: 'success', objName: 'script-pusher' };
    console.log('Foo called:\n' + JSON.stringify(allData, null, 4));
    response.send(result);
});

router.get('/RUN-SCRIPT', (request, response) => {
    'use strict';
    allData = '';
    const result = { result: 'success', objName: 'script-pusher' };
    console.log('Foo called:\n' + JSON.stringify(allData, null, 4));
    response.send(result);
});

router.get('/check', (request, response) => {
    'use strict';
    allData = '';
    const result = { result: 'success', objName: 'script-pusher' };
    console.log('Foo called:\n' + JSON.stringify(allData, null, 4));
    response.send(result);
});

router.get('/copyFile', function(request, response) {
    allData = '';
    var hostAddress;
    var runCpuUptime;
    runCpuUptime(hostAddress, request.query.script, response);
    console.log('run-get-started called in ssh-runner', hostAddress,runCpuUptime);
});
/*router.get('/run-system-tool', (request, response) => {

});*/
module.exports = router;
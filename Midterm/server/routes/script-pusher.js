const express = require('express');
const router = express.Router();

//var router = Router();

const spawn = require('child_process').spawn;

let allData = '';
module.exports = () => {
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

    const copyFile = () => {
        return new Promise(function(resolve, reject) {
            console.log('Copy to EC2', process.env.SETUP_LINUXBOX);

            const pushScript = spawn('scp', [
                process.env.SETUP_LINUXBOX + '/CpuInfo',

                'ec2-bc:/home/ubuntu'
            ]);

            pushScript.stdout.on('data', data => {
                console.log(`child stdout:\n${data}`);

                allData += 'PUSH-SCRIPT: ' + data;

                //console.log('PUSH', data);
            });

            pushScript.stderr.on('data', data => {
                console.log(`child stderr:\n${data}`);

                allData += 'PUSH-SCRIPT: ' + data;

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

    router.get('/copy-file', (request, response) => {
        const result = { result: 'success', objName: 'script-pusher' };

        response.send(result);
    });

    router.get('/RUN-SCRIPT', (request, response) => {
        'use strict';
        allData = '';
        const result = { result: 'success', objName: 'script-pusher' };

        response.send(result);
    });

    router.get('/check', (request, response) => {
        'use strict';
        allData = '';
        const result = { result: 'success', objName: 'script-pusher' };

        response.send(result);
    });
    //module.exports = router;
};

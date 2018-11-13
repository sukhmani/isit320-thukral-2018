let allData = '';
const runCpuInfo = (hostAddress, response) => {
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
//Router.get('/uptime', function(request, response) {
  //  console.log('run-get-started called in ssh-runner', hostAddress);
//});

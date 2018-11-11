
#! /usr/bin/env bash

SERVER_DIR='../server/public/'
echo ${SERVER_DIR}/precache-manifest*.js
#that points at the public directory in the server folder

echo ${SERVER_DIR}
function copyNew() {
    npm run build
    cp -r build/* ${SERVER_DIR}/.
}

function deleteOld() {
#asset-manifest.json
#favicon.ico
#index.html
#manifest.json
#precache-manifest.2efd1de520c30948b299e17d59c75fef.js
#service-worker.js
#static
    rm -v ${SERVER_DIR}/precache-manifest*.js
    rm -v -r ${SERVER_DIR}'/static'
rm -v ${SERVER_DIR}/asset-manifest.json
rm -v ${SERVER_DIR}/favicon.ico
rm -v ${SERVER_DIR}/index.html
rm -v ${SERVER_DIR}/manifest.json
rm -v ${SERVER_DIR}/precache-manifest.2efd1de520c30948b299e17d59c75fef.js
rm -v ${SERVER_DIR}/service-worker.js
}

function runAll() {
    function: copyNew
    function: deleteOld
}

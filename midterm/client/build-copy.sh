
#! /usr/bin/env bash

SERVER_DIR='../server/public/'
echo ${SERVER_DIR}/precache-manifest*.js
#that points at the public directory in the server folder

echo ${SERVER_DIR}
function copyNew() {
npm run build
cp -r build/* ${SERVER_DIR}
}

function deleteOld() {
    rm -v ${SERVER_DIR}/precache-manifest*.js
    rm -v -r ${SERVER_DIR}'/static'
}

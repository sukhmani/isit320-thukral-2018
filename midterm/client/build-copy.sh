
#! /usr/bin/env bash

SERVER_DIR='../server/public/'
echo ${SERVER_DIR}/precache-manifest*.js

#that points at the public directory in the server folder
#! /usr/bin/env bash


echo $SERVER_DIR
function copyNew() {

npm run build
cp -r build/* $(SERVER_DIR)}

npm run buid
function()

rm $(SERVER_DIR)/precache-manifest*.js

rm -r $(SERVER_DIR)/static

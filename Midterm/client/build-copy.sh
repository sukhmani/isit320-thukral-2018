#! /usr/bin/env bash

RED='\033[0;31m'
LIGHT_RED='\033[1;31m'
LIGHT_GREEN='\033[1;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;36m'
NC='\033[0m' # No Color



${SERVER_DIR} '../server/public/'
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
     copyNew
     deleteOld
}

#copyNew
#deleteOld
#runAll


while true; do
    message "Menu"
    echo -e "$LIGHT_GREEN  a) Delete Old Files and Run Build"
    echo -e "$LIGHT_GREEN  b) Only Build"
    echo -e "$LIGHT_GREEN  c) Only Delete"
    echo -e "$LIGHT_RED  x) Exit (You should source .bashrc when done)"
    echo -e "\n$NC"
    read -p "Please make a selection: " eotuyx
    case $eotuyx in
        [Aa]* ) runAll false; continue;;
        [Bb]* ) copyNew; continue;;
        [Cc]* ) deleteOld; continue;;
        [XxQq]* ) break;;
        * )  -e "\n$NC" + "Please answer with a, b, c or x (or q).";;
    esac
done

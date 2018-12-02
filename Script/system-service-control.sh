#!/bin/bash

function banner {
    echo ' '
    echo ===============================
    echo --- "$1" ---
    echo ===============================
}

function show {
    banner "$1"
    sudo systemctl show -p ActiveState -p SubState -p Environment $2
}

function showSystemCheck() {
    show 'SystemCheck' systemcheck.service
}


function checkPorts() {
    sudo nmap -p 30025-30035 10.0.2.15
}

function checkPorts() {
LOCAL_IP=$(./get-ip.js)
    sudo nmap -p 30025-30235 ${LOCAL_IP}
}


function showAWSProvision() {
    sudo nmap -p 30025-30035 10.0.2.15
}

function showMidterm() {
    sudo nmap -p 30025-30035 10.0.2.15
}

function showEC2-Copy-File() {
    sudo nmap -p 30025-30035 10.0.2.15
}

message 'System Service Control'
T
echo 'Learn about Systemd and other running services.'

while true; do
    message "Menu"
    echo -e "$LIGHT_GREEN  a) Check Ports 30025-30040"
    echo -e "$LIGHT_GREEN  b) Only Build"
    echo -e "$LIGHT_GREEN  c) Only Delete"
    echo -e   "$LIGHT_GREEN d) AWS Provision"
    echo -e   "$LIGHT_GREEN e) Midterm"
    echo -e   "$LIGHT_GREEN f) EC2-Copy-File"
    echo -e "$LIGHT_RED  x) Exit"
    echo -e "\n$NC"
    read -p "Please make a selection: " userInput
    case $userInput in
        [Aa]* ) checkPorts false; continue;;
        [Bb]* ) showSystemCheck; continue;;
        [Cc]* ) showSystemCheckRefactor; continue;;
        [Dd]* ) showAWSProvision; continue;;
        [Ee]* ) showMidterm; continue;;
        [Ff]* ) showEC2-Copy-File; continue;;
        [XxQq]* ) break;;
        *) echo -e "\n$NC" + "Please answer with a, b, c, d, e, f or x.";;
    esac
done
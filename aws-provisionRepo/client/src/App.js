import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            buttons: [
                {
                    id: 1,
                    name: queryServer
                },
                {
                    id: 2,
                    name: createEducate
                },
                {
                    id: 3,
                    name: createWithAwsStandardAccount
                },
                {
                    id: 4,
                    name: associateElasticIp
                },
                {
                    id: 5,
                    name: copyGetStarted
                },
                {
                    id: 6,
                    name: runGetStarted
                },
                {
                    id: 7,
                    name: removeKnownHost
                }
            ],
            file: 'File name will be placed here.',
            status: 'waiting for server'
        };
    }

    createEducate = () => {
        const that = this;
        fetch('/createEducate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(createEducate => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    createWithAwsStandardAccount = () => {
        const that = this;
        fetch('/createWithAwsStandardAccount')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(createWithAwsStandardAccount => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    associateElasticIp = () => {
        const that = this;
        fetch('/associateElasticIp')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(associateElasticIp => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    copyGetStarted = () => {
        const that = this;
        fetch('/copyGetStarted')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(copyGetStarted => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    runGetStarted = () => {
        const that = this;
        fetch('/runGetStarted')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(runGetStarted => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    removeKnownHost = () => {
        const that = this;
        fetch('/removeKnownHost')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(removeKnownHost => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    queryServer = () => {
        const that = this;
        fetch('/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
                <button onClick={this.createEducate}>
                    Create with AWS Educate Account
                </button>
                <button onClick={this.createWithAwsStandardAccount}>
                    Create with AWS Standard Account
                </button>
                <button onClick={this.associateElasticIp}>
                    Associate Elastic Ip
                </button>
                <button onClick={this.copyGetStarted}>
                    Copy the GetStarted Script
                </button>
                <button onClick={this.runGetStarted}>
                    Run the GetStarted Script
                </button>
                <button onClick={this.removeKnownHost}>
                    Remove from KnownHost
                </button>
            </div>
        );
    }
}

export default App;

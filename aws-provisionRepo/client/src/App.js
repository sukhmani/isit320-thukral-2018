import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
//var React = require('react');

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

            title: 'waiting for you to click...',

            query: [],

            queryBar: 'waiting for you to click...',

            queryCount: 'waiting for you to click...',

            params: 'waiting for you to click...'

        };

    }



    createEducate = () => {

        const that = this;

        fetch('/createEducate?bar=qux&count=5')

            .then(function(response) {

                return response.json();

            })

            .then(function(json) {

                console.log('parsed json', json);

                const query = Object.keys(json.query).map(function(key) {

                    return [key, ' ', json.query[key], ' '];

                });

                that.setState({

                    title: json.title,

                    query: query,

                    queryBar: json.query.bar,

                    queryCount: json.query.count,

                    params: JSON.stringify(json.params),

                });

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

        fetch('/createWithAwsStandardAccount?bar=qux&count=5')

            .then(function(response) {

                return response.json();

            })

            .then(function(json) {

                console.log('parsed json', json);

                const query = Object.keys(json.query).map(function(key) {

                    return [key, ' ', json.query[key], ' '];

                });

                that.setState({

                    title: json.title,

                    query: query,

                    queryBar: json.query.bar,

                    queryCount: json.query.count,

                    params: JSON.stringify(json.params),

                });

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

                <header>

                    <h1>AWS provision</h1>

                    <p>Title: {this.state.title}</p>

                    <p>Query: {this.state.query}</p>

                    <p>Query Bar: {this.state.queryBar}</p>

                    <p>Query Count: {this.state.queryCount}</p>

                    <p>Params: {this.state.params}</p>

                </header>

                <main>

                    <button onClick={this.createEducate}>createEducate</button>
                    <button onClick={this.createWithAwsStandardAccount}>createWithAwsStandardAccount</button>
                    <button onClick={this.associateElasticIp}>associateElasticIp</button>
                    <button onClick={this.copyGetStarted}>copyGetStarted</button>
                    <button onClick={this.runGetStarted}>runGetStarted</button>
                    <button onClick={this.removeKnownHost}>removeKnownHost</button>

                </main>

                <footer>

                    <p>&copy; by Sukhmani t</p>

                </footer>

            </div>

        );

    }

}



export default App;


/*
class App extends Component {
    queryServer;
    createEducate;
    createWithAwsStandardAccount;
    associateElasticIp;
    copyGetStarted;
    runGetStarted;
    removeKnownHost;
    constructor() {
        super();
        this.state = {
            buttons: [
                {
                    id: 1,
                    name: this.queryServer
                },
                {
                    id: 2,
                    name: this.createEducate
                },
                {
                    id: 3,
                    name: this.createWithAwsStandardAccount
                },
                {
                    id: 4,
                    name: this.associateElasticIp
                },
                {
                    id: 5,
                    name: this.copyGetStarted
                },
                {
                    id: 6,
                    name: this.runGetStarted
                },
                {
                    id: 7,
                    name: this.removeKnownHost
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
                    ex);
            });

    };

    render() {
        return (
            <div className="App">
                <div className="App-header">

                    <h2>designed for class-assignment</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                    {this.state.result} foo: {this.state.foo}
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
}*/



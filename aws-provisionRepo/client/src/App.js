import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
//import './Elfheader.js';
//var React = require('react');

class App extends Component {

    constructor(props) {

        super(props);

        /*   this.dataEndPoints = [

            '/script-pusher/run-script?script=',

            '/ssh-runner/runCpuInfo?script=',

            //'/script-pusher/run-system-tool?script=',

            '/ssh-runner/runCpuUptime?script=',

            '/ssh-runner/runCpuInfo?script='

        ];*/

        this.state = {

            allData: '',

            selectedValue: '',

            endPointIndex: 0

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

                    allData: json.title,

                    selectedValue: query,

                    endPointIndex: json.query.count,
                    //queryBar: json.query.bar,

                    //params: JSON.stringify(json.params),

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
                    allData: json.title,

                    selectedValue: query,

                    endPointIndex: json.query.count,

                    /*title: json.title,

                    query: query,

                    queryBar: json.query.bar,

                    queryCount: json.query.count,

                    params: JSON.stringify(json.params),*/

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
                    {/* <p className="Elfheader">AWS Provision</p>*/}
                    <h1>AWS Provision </h1>


                    {/*<p>Title: {this.state.title}</p>

                    <p>Query: {this.state.query}</p>

                    <p>Query Bar: {this.state.queryBar}</p>

                    <p>Query Count: {this.state.queryCount}</p>

                    <p>Params: {this.state.params}</p>*/}

                </header>

                <main>

                    <button onClick={this.createWithAwsStandardAccount}>createWithAwsStandardAccount</button>
                    <button onClick={this.createEducate}>create with AWS Educate Account</button>

                    <button onClick={this.associateElasticIp}>associate Elastic Ip</button>
                    <hr/>
                    <button onClick={this.copyGetStarted}>copy the GetStarted Script</button>
                    <hr/>
                    <button onClick={this.runGetStarted}>run the GetStarted script on EC2</button>
                    <button onClick={this.removeKnownHost}>run the RunUbuntuSetup Script on EC2</button>
                    <hr/>
                    <button onClick={this.removeKnownHost}>remove from Known Host</button>
                    <button onClick={this.removeKnownHost}>get instance status</button>
                    <button onClick={this.removeKnownHost}>reboot instance</button>


                </main>

                <footer>

                    <p>&copy; by Sukhmani t</p>

                </footer>

            </div>

        );

    }

}



export default App;


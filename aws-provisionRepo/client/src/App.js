/* eslint-disable indent */
import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import ElfHeader from './ElfHeader';

//var React = require('react');

class App extends Component {
    runScript = (path, script) => {

        const that = this;

        if (!script) {

            return;

        }

        fetch(path + script)

            .then(function(response) {

                return response.json();

            })

            .then(function(json) {

                console.log('allData', json.allData);

                console.log('result', json.result);

                console.log('code', json.code);

                console.log('error', json.error);

                let info = '';

                if (json.result === 'error') {

                    info = json.error;

                } else if (script === 'CpuInfo') {

                    var regex1 = RegExp('model name.*', 'g');

                    let array1 = regex1.exec(json.allData);

                    while (array1 !== null) {

                        info += array1[0] + '\n';

                        console.log(`Found ${array1[0]}.`);

                        array1 = regex1.exec(json.allData);

                    }

                } else {

                    info = json.allData;

                }

                that.setState({ allData: info });

            })

            .catch(function(ex) {

                console.log(

                    'parsing failed, URL bad, network down, or similar',

                    ex

                );

            });

    };

    handleChange = event => {

        const selectedValue = event.target.value;

        const endPointIndex = event.target.getAttribute('data-endpoint');

        console.log('HANDLE CHANGE', selectedValue);

        this.setState({

            ...this.state,

            selectedValue: selectedValue,

            endPointIndex: endPointIndex

        });

    };

    handleSubmit = event => {

        this.setState({ allData: '' });

        console.log('A name was submitted: ', this.state);

        this.runScript(

            this.dataEndPoints[this.state.endPointIndex],

            this.state.selectedValue

        );

        event.preventDefault();

    };
    constructor(props) {

        super(props);

        this.dataEndPoints = [

            '/script-pusher/run-script?script=',

            '/ssh-runner/runCpuInfo?script=',

            //'/script-pusher/run-system-tool?script=',

            '/ssh-runner/runCpuUptime?script=',

            '/ssh-runner/runCpuInfo?script='

        ];

        this.state = {

            allData: '',

            selectedValue: '',

            endPointIndex: 0

        };

    }

   /* constructor(props) {

        super(props);*/

        /*   this.dataEndPoints = [

            '/script-pusher/run-script?script=',

            '/ssh-runner/runCpuInfo?script=',

            //'/script-pusher/run-system-tool?script=',

            '/ssh-runner/runCpuUptime?script=',

            '/ssh-runner/runCpuInfo?script='

        ];*/

        /*this.state = {

            value: null,

            users:[] ,

            endPointIndex: 0



        };*/

    //}

    state = {users: [],
        value: [],
        created: [],
        Associated: [],
        Copied:[],
        Started:[]

    }

    a = ()=> {
        fetch('./users')

            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    createEducate = () => {

        const that = this;

        fetch('aws/createEducate')

            .then(function(response) {

                return response.json();

            })

            .then(function(json) {

                console.log('parsed json', json);

                const q = Object.keys(json.q).map(function(key) {

                    return [key, ' ', json.q[key], ' '];

                });

                that.setState({

                    /*allData: json.title,

                    selectedValue: query,

                    endPointIndex: json.query.count,*/

                    user: json.user,

                    value: q,
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

                const q = Object.keys(json.q).map(function(key) {

                    return [key, ' ', json.q[key], ' '];

                });

                that.setState({
                    allData: json.allData,

                    selectedValue: q,

                    endPointIndex: json.q.endPointIndex,

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







                <ElfHeader />
                <main>
                    <button

                        onClick={() => this.setState({ value: '    created ' })}
                    > createWithAwsStandardAccount
                        {this.state.value}
                    </button>

                    <button

                        onClick={() => this.setState({ users: '    created '})}
                    > createWithAwsStandardAccount
                        {this.state.users}
                    </button>

                    <button

                        onClick={() => this.setState({ created: '    created  '})}
                    > create with AWS Educate Account
                        {this.state.created}
                    </button>

                    <button
                    onClick={() => this.setState({ Associated: '    Associated '})}
                    > associate Elastic Ip
                    {this.state.Associated}
                </button>



                    <hr/>

                    <button
                        onClick={() => this.setState({ Copied: '    Copied '})}
                    > copy the GetStarted Script
                        {this.state.Copied}
                    </button>


                    <hr/>
                    <button
                        onClick={() => this.setState({ Started: '    Started '})}
                    > copy the GetStarted Script
                        {this.state.Started}
                    </button>

                    <button onClick={this.removeKnownHost}>run the RunUbuntuSetup Script on EC2</button>
                    <button
                        onClick={() => this.setState({ Removed: '    Removed '})}
                    > removeKnownHost
                        {this.state.Removed}
                    </button>

                    <hr/>
                    <button onClick={this.removeKnownHost}>remove from Known Host</button>
                    <button onClick={this.removeKnownHost}>get instance status</button>
                    <button onClick={this.removeKnownHost}>reboot instance</button>

{/*<button onClick={
    this.state.users.map(users =>
     key={users.id}>{users.username}
)
}>users</button>*/}

                </main>



                <footer>





                    <p>&copy; by Sukhmani t</p>

                </footer>

            </div>

        );

    }

}



export default App;


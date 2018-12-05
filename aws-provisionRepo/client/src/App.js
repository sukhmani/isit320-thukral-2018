import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
//var React = require('react');

class App extends Component {

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

                    <h1>AWS provision</h1>

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




/*



import React, { Component } from 'react';

//import logo from './logo.svg';

import './App.css';

import 'whatwg-fetch';



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

    /!*  handleRemote= event => {

      this.setState({allData: ''});

      console.log('A name was submitted: ', this.state);

      this.runScript(

          this.dataEndPoints[this.state.endPointIndex],

          this.state.selectedValue

      );

      event.preventDefault();

      };

  *!/

    handleRemote = event => {

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



    render() {

        const radioWeb = (

            <div className="container">

                <form onSubmit={this.handleSubmit}>

                    <fieldset>

                        <div className="elf-form-field">

                            <legend id="services">Services</legend>

                            <input

                                type="radio"

                                name="app-choice"

                                data-endpoint="0"

                                value="CpuInfo"

                                id="elf-radio-cpu"

                                onChange={this.handleChange}

                            />

                            <label htmlFor="elf-radio-cpu">CpuInfo</label>



                            <input

                                type="radio"

                                name="app-choice"

                                data-endpoint="1"

                                value="VersionCheck"

                                id="elf-radio-version"

                                onChange={this.handleChange}

                            />

                            <label htmlFor="elf-radio-version">

                                VersionCheck

                            </label>



                            <input

                                type="radio"

                                name="app-choice"

                                data-endpoint="2"

                                value="uptime"

                                id="elf-radio-cpu"

                                onChange={this.handleChange}

                            />

                            <label htmlFor="elf-radio-cpu">Uptime</label>

                        </div>



                        <div className="form-group">

                            <button type="submit" className="btn btn-primary">

                                Run System Script

                            </button>

                        </div>

                    </fieldset>

                </form>

            </div>

        );

        return (

            <div className="App">

                {/!*<header className="App-header">

                 *!/}

                {/!*<p>

                        Edit <code>src/App.js</code> and save to reload.

                    </p>*!/}

                {/!*  <a

                        className="App-link"

                        href="https://reactjs.org"

                        target="_blank"

                        rel="noopener noreferrer"

                    >

                        Learn React

                    </a>*!/}

                {/!*</header>*!/}

                <main>

                    <section>{radioWeb}</section>

                    {/!*<section>{radioRemote}</section>*!/}

                    <section>

                        <pre id="output">{this.state.allData}</pre>

                    </section>

                </main>

            </div>

        );

    }

}



export default App;

//add elf header -- import*/

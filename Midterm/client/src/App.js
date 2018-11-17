//import React from 'react';
//import ReactDOM from 'react-dom';

import React, { Component } from 'react';
//
// import logo from './logo.svg';
import './App.css';

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
    /*  handleRemote= event => {
      this.setState({allData: ''});
      console.log('A name was submitted: ', this.state);
      this.runScript(
          this.dataEndPoints[this.state.endPointIndex],
          this.state.selectedValue
      );
      event.preventDefault();
      };
  */
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
            '/script-pusher/check?script=',
            '/script-pusher/run-system-tool?script=',
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
                            <legend>Services</legend>
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
                                Version Info
                            </label>

                            <input
                                type="radio"
                                name="app-choice"
                                data-endpoint="2"
                                value="uptime"
                                id="elf-radio-cpu"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="elf-radio-cpu">CpuInfo</label>

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
                {/*<header className="App-header">
*/}
                {/*<p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>*/}
                {/*  <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>*/}
                {/*</header>*/}
                <main>
                    <section>{radioWeb}</section>
                    {/*<section>{radioRemote}</section>*/}
                    <section>
                        <pre id="output">{this.state.allData}</pre>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
//add elf header -- import

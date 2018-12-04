import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            allData: '',
        };
    }
    runCpuInfo = () => {
        /*const that = this;
        that.setState({ allData: 'abc' });*/
        fetch('mockData.json')
        //that.setState(mock-data => (json));
            .then(function (json) {

                console.log('parsed json', json);
                /* // that.setState({ firstName: 'abc' });*/


            })
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('JSON from server:', json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, error on server, URL bad, network down, or similar'
                );
                console.log(JSON.stringify(ex, null, 4));
            });

    };

    render() {
        return (
            <div className="App">
                {/*<header className="elf-jsx-start">*/}
                <header>
                    {/*elf-jsx-start*/}

                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <p className="byline">by Sukhmani t </p>

                    <main>
                        <button onClick={this.runCpuInfo}>callCpuInfo</button>
                    </main>
                </header>
                <footer>
                    <p>&sukhmanit; 2018 </p>
                </footer>
            </div>
        );
    }
}

export default App;

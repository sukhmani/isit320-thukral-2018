import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        data-endpoint="0"
        value="VersionCheck"
        id="elf-radio-version"
        onChange={this.handleChange}
        />
        <label htmlFor="elf-radio-version">Version Info</label>

        </div>

        <div className="form-group">
            <button type="submit" className="btn btn-primary">Run System Script</button>
        </div>
        </fieldset>
        </form>
        </div>
    );
        return (
            <div className="App">
                <header className="App-header">
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
                </header>
            </div>
        );
    }
}

export default App;

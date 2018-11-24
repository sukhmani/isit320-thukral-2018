import React, {Component} from 'react';
import './App.css';
import 'whatwg-fetch';
//import button from "../../server/public/bower_components/bootstrap/js/src/button";

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'File name will be placed here.',
            status: 'waiting for server'
        };
    }

    queryServer = () => {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
            </div>
        );
    }
}

export default App;

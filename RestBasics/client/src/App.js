import React, {Component} from 'react';
import './App.css';
import 'whatwg-fetch';
//import '../server/routes/api.js'


class App extends Component {
    constructor() {
        super();
        this.state = {
            file: '',
            status: 'waiting for server'
        };
    }

    queryServer = () => {
        const that = this;
        fetch("/api/api")
        //fetch("/api/api") err:routes ouside src not supported
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('data', json);
                that.setState(api => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };
 data=[{"result":"success","foo":"bar","file":"api.js", "status":"done!"}];
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file} result: {this.state.result} foo: {this.state.foo}
                </p>
                <button onClick={this.queryServer}>Bar</button>
            </div>
        );
    }
}

export default App;

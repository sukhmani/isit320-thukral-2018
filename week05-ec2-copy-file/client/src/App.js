import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  copyFile = () => {
    //const that = this;
    fetch("/script-pusher/foo")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("parsed json", json);
        //that.setState(foo => (json));
      })
      .catch(function(ex) {
        console.log("parsing failed, URL bad, network down, or similar", ex);
      });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>CopyFile</h1>
        </header>
        <main>
          <button onClick={this.copyFile}>CopyFile</button>
        </main>
        <footer>
          <p>&copy; by Sukhmani </p>
        </footer>
      </div>
    );
  }
}

export default App;

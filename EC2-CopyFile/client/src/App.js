import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1> Copy File </h1> 
        </header>
        <main>
          <button onClick={this.CopyFile}> Copy File </button>
        </main>
        <footer>
          <p>&Copy; by Sukhmani</p>
        </footer>
      </div>
    );
  }
}

export default App;

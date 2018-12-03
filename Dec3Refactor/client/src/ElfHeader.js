import React, { Component } from 'react';
import './App.css';

class ElfHeader extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>System Check</h1>
                </header>
            </div>
        );
        /* return (
            <div className="App">

                <main>
                    <section>{radioLocal}</section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>

                </main>
            </div>
        );*/
    }
}

export default ElfHeader;
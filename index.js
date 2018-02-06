import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends Component {
    state = {
        project: 'BurgerBuilder'
    };
    render() {
        return (
            <div>
                <h1>React {this.state.project}r</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

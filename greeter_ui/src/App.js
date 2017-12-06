import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// bringing in our contract 
import {greeterContract} from './EthereumSetup.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: ""
    }
  }

  componentWillMount() {
    let data = greeterContract.greet();

    this.setState({
      greeting: String(data)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>"{this.state.greeting}"</h2>
      </div>
    );
  }
}

export default App;

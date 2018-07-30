import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, inject } from 'mobx-react';
import stores from './stores/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}> 
          {/* <span>{DevicesStore.devicesList[0]}</span> */}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Provider>
      </div>
    );
  }
}

export default App;

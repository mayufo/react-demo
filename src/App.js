import React, { Component } from 'react';
import './App.css';
import PCIndex from './components/PC/PCIndex'
import MobileIndex from './components/Mobile/MobileIndex'
import MediaQuery from 'react-responsive';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MediaQuery query="(min-device-width: 1224px)">
            <PCIndex/>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
            <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;

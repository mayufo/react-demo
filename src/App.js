import React, { Component } from 'react';
import './App.css';
import PCIndex from './components/PC/PCIndex'
import PCNewDetail from './components/PC/PCNewDetail'

import MobileIndex from './components/Mobile/MobileIndex'
import MobileDetail from './components/Mobile/MobileNewDetail'
import MediaQuery from 'react-responsive';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
              <MediaQuery query="(min-device-width: 1224px)">
                  <Router>
                      <div>
                          <Switch>
                              <Route exact path="/" component={PCIndex}></Route>
                              <Route exact path="/detail/:uniquekey" component={PCNewDetail}></Route>
                          </Switch>
                      </div>
                  </Router>
              </MediaQuery>
              <MediaQuery query="(max-device-width: 1224px)">
                  <Router>
                      <div>
                          <Switch>
                              <Route exact path="/" component={MobileIndex}></Route>
                              <Route exact path="/detail/:uniquekey" component={MobileDetail}></Route>
                          </Switch>
                      </div>
                  </Router>
              </MediaQuery>
      </div>
    );
  }
}

export default App;

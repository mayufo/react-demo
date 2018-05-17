import React, { Component } from 'react';
import './App.css';
import Root from './components/root'
import List from './components/list'
import Info from './components/info'
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Root/>*/}
        <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to={`/`}>首页</Link>
                        <Link to={`/list`}>列表</Link>
                        <Link to={`/info`}>摘要</Link>
                    </li>
                </ul>
                <Route exact component={Root} path='/'> </Route>
                <Route component={List} path='/list'></Route>
                <Route component={Info} path='/info'></Route>
            </div>

        </HashRouter>
      </div>
    );
  }
}

export default App;

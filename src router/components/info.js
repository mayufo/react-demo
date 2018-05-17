import React from 'react'
import Detail from './detail'
import {BrowserRouter as Router, Route, HashRouter, Switch} from 'react-router-dom'

export default class ComponentList extends React.Component {
    render () {
        return (
            <div>
                <h2>简介</h2>
                <Route exact component={Detail} path='/info/11'></Route>
            </div>
        )
    }
}

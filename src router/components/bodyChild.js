import React from 'react'
import ReactMixin from 'react-mixin'
import Mix from './mixin'
export default class BodyChild extends React.Component {
    constructor () {
        super()
        Mix.log()
    }
    render () {

        return (
            <div>
                <p>子页面：<input type="text" onChange={this.props.handleValChange}/></p>
            </div>
        )
    }
}

ReactMixin(BodyChild.prototype, Mix)

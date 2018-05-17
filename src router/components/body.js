import React from 'react'
// import BodyChild from './bodyChild'
export default class Body extends React.Component {
    constructor () {
        super()
        this.state = {
            age: 20
        }
    }
    changeUserInfo (age) {
        this.setState({age: parseInt(this.state.age, 10) + 1})
        this.setState({age: age})
    }
    handleValChange (event) {
        this.setState({age: event.target.value})
    }
    render () {
        let html = '你好&nbsp世界'
        let html1= '你好\u0020世界'
        return (
            <div>
                <div>内容 {html1}</div>
                <div dangerouslySetInnerHTML={{__html: html}}></div>
                <div>{this.state.age}</div>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>
                {/*<BodyChild handleValChange={this.handleValChange.bind(this)}/>*/}
            </div>
        )
    }
}

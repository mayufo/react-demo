import React from 'react'
import style from './header.css'

export default class Header extends React.Component {
    constructor () {
        super()
        this.state = {
            minHeader: false
        }
    }
    switchHeader () {
        console.log(this.state.minHeader);
        this.setState({
            minHeader: !this.state.minHeader
        });
    }
    render () {
        // const style = {
        //     header: {
        //         "padding-top": (this.state.minHeader) ? "3px": "15px",
        //         paddingBottom: (this.state.minHeader) ? "3px": "15px",
        //         backgroundColor: "pink"
        //
        //     }
        // }
        return (
            <div style={style.header}>
                111111111
            </div>
        )
    }
}



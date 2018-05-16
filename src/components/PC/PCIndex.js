import React, { Component } from 'react';
import PCHeader from './PCHeader'
import PCFooter from './PCFooter'
import PCContent from './PCContent'
class PCIndex extends Component {
    render() {
        return (
            <div>
                <PCHeader/>
                <PCContent/>
                <PCFooter/>
            </div>
        );
    }
}

export default PCIndex;

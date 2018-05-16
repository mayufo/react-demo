import React, {Component} from 'react';
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import MobileContent from './MobileContent'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane;
class MobileIndex extends Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileContent/>
                <MobileFooter/>
            </div>
        );
    }
}

export default MobileIndex;

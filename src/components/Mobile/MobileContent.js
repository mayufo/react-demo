import React, {Component} from 'react';
import {Tabs, Carousel} from 'antd'
import style from './Mobile.css'
import MobileNewItem from './MobileNewItem'
const TabPane = Tabs.TabPane;
class MobileContent extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabPane tab="头条" key="top">
                        <Carousel autoplay >
                            <div className={style.carouselItem}><h3>1</h3></div>
                            <div className={style.carouselItem}><h3>2</h3></div>
                            <div className={style.carouselItem}><h3>3</h3></div>
                            <div className={style.carouselItem}><h3>4</h3></div>
                        </Carousel>
                        <MobileNewItem type="top" count={20}/>
                    </TabPane>
                    <TabPane tab="社会" key="social">
                        <MobileNewItem type="shehui" count={20}/>
                    </TabPane>
                    <TabPane tab="娱乐" key="play">
                        <MobileNewItem type="yule" count={20}/>
                    </TabPane>
                    <TabPane tab="体育" key="sport">
                        <MobileNewItem type="guoji" count={20}/>
                    </TabPane>
                    <TabPane tab="陕西" key="shannxi">
                        <MobileNewItem type="shehui" count={20}/>

                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default MobileContent;

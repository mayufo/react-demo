import React from 'react'
import {Row, Col, Carousel, Tabs} from 'antd'
import style from './PC.css'
import PCNewItem from './PCNewItem'
import PCNewImage from './PCNewImage'
const TabPane = Tabs.TabPane;


export default class PCContent extends React.Component {
    render() {
        return (
            <div className={style.contentWrap}>
                <Row>
                    <Col span={2}></Col>
                    <Col span={8}>
                            <Carousel autoplay >
                                <div className={style.carouselItem}><h3>1</h3></div>
                                <div className={style.carouselItem}><h3>2</h3></div>
                                <div className={style.carouselItem}><h3>3</h3></div>
                                <div className={style.carouselItem}><h3>4</h3></div>
                            </Carousel>
                        <div style={{marginTop: '15px'}}>
                            <PCNewImage count={6} title="娱乐头条" type="yule" />
                        </div>

                    </Col>
                    <Col span={12}>
                        <Tabs style={{marginLeft: '15px'}}>
                            <TabPane tab="头条新闻"  key="top">
                                <PCNewItem count={20} type="top" border={true}/>
                            </TabPane>
                            <TabPane tab="国际新闻" key="guoji">
                                <PCNewItem  count={20} type="guoji" border={true}/>
                            </TabPane>
                        </Tabs>

                    </Col>
                    <Col span={2}></Col>

                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <PCNewImage count={8} title="娱乐头条" type="yule" />
                        <PCNewImage count={16} title="国际新闻" type="guoji" />

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}

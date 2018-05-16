import React from 'react'
import {Row, Col } from 'antd'
import style from './Mobile.css'

export default class MobileFooter extends React.Component {

    render () {
        return (
            <header >
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <div className={style.footerText}>版权在这里啊啊啊啊</div>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </header>
        )
    }
}

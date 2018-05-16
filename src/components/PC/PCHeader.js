import React from 'react'
import {Row, Col, Menu, Icon, Button} from 'antd'
import style from './PC.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import LoginModal from '../LoginModal'
import { inject, observer } from 'mobx-react';

@inject(({userInfo}) => ({
    login: userInfo.login,
    isLogin: userInfo.isLogin,
    setLoginModel: userInfo.setLoginModel,
    userName: userInfo.userName,
    logout: userInfo.logout
}))

export default class PCHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 'mail', // 默认菜单选项
            action: 'login', // 当前状态 默认未登录
        }
    }

    // 登录
    clickMenu(e) {
        if (e.key === 'register') {
            this.setState({current: 'register'})
            this.props.setLoginModel(true)
        }
    }
    // model的显示
    setModalState(value) {
        this.setState({modalVisible: value})
    }
    render() {
        const userShow = this.props.isLogin ?
            <Menu.Item key="logout" style={{float: 'right', display: 'flex', alignItems: 'center'}} >
                <Button type="primary" htmlType="button">{this.props.userName}</Button>
                &nbsp;&nbsp;
                <Router>
                    <a>
                        <Button type="dashed" htmlType="button">个人中心</Button>
                    </a>
                </Router>

                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.props.logout.bind(this)}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" style={{float: 'right'}} >
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        return (
            <header >
                <Row>
                    <Col span={2}></Col>
                    <Col span={4} className={style.headerLogo}>
                        <i className="iconfont icon-news"></i>
                        <span >ReactNews</span>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.clickMenu.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="top">
                                <Icon type="bars"/> 头条
                            </Menu.Item>
                            <Menu.Item key="social">
                                <Icon type="solution"/>社会
                            </Menu.Item>
                            <Menu.Item key="play">
                                <Icon type="smile-o"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="sport">
                                <Icon type="trophy"/>体育
                            </Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <LoginModal/>
            </header>
        )
    }
}

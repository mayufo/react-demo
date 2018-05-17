import React from 'react'
import {Icon} from 'antd'

import style from './Mobile.css'

import LoginModal from '../LoginModal'
import { inject } from 'mobx-react';

@inject(({userInfo}) => ({
    login: userInfo.login,
    isLogin: userInfo.isLogin,
    setLoginModel: userInfo.setLoginModel,
    userName: userInfo.userName,
    logout: userInfo.logout
}))
export default class MobileHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 'mail', // 默认菜单选项
            modalVisible: false, // 控制modal
            action: 'login', // 当前状态 默认未登录
            isLogin: false, // 是否登录
            userNickName: '', // 用户名称
            userId: 0 // 用户编码
        }
    }
    setModalState (value) {
        this.setState({modalVisible: value})
    }
    render () {
        const userShow = this.props.isLogin ?
            <a style={{float: 'right', margin: '15px 15px 0 0'}}>
                <Icon type="inbox"/>
            </a>
            :
            <Icon onClick={this.props.setLoginModel.bind(this,true)} style={{float: 'right', fontSize: '20px', marginRight: '16px', marginTop: '16px'}} type="setting" />
        return (
            <div className={style.mobile}>
                <header>
                    <i className="iconfont icon-news"></i>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <LoginModal/>
            </div>

        )
    }
}

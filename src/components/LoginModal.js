import React from 'react';
import { Modal, Tabs, Form, Input, Button } from 'antd'
import { inject } from 'mobx-react';
import { login } from '@/server/getData'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

@inject(({userInfo}) => ({
    login: userInfo.login,
    setLoginModel: userInfo.setLoginModel,
    showLoginModal: userInfo.showLoginModal
}))

export default class LoginModal extends React.Component {
    async loginSubmit(e) {
        e.preventDefault()
        let res = await login('userName', 'passWord')
        console.log(res);
        this.props.login('mayufo', '12345')
    }
    render () {
        return (
           <div>
               <Modal title="用户中心"
                      wrapClassName="vertical-center-modal"
                      visible={this.props.showLoginModal}
                      onCancel={ this.props.setLoginModel.bind(this, false)}
                      onOk={ this.props.setLoginModel.bind(this, false) }
                      key="false"
                      cancelText="取消"
                      okText="关闭">
                   <Tabs defaultActiveKey="login">
                       <TabPane tab="登录" key="login">
                           <Form horizontal="true" onSubmit={this.loginSubmit.bind(this)}>
                               <FormItem label="账户">
                                   <Input placeholder="请输入您的账号"/>
                               </FormItem>
                               <FormItem label="密码">
                                   <Input type="password" placeholder="请输入您的密码"/>
                               </FormItem>
                               <Button type="primary" htmlType="submit">登录</Button>
                           </Form>
                       </TabPane>
                       <TabPane tab="注册" key="signIn">
                           <Form horizontal onSubmit={this.loginSubmit.bind(this)}>
                               <FormItem label="用户名">
                                   <Input placeholder="请输入您的账号" />
                               </FormItem>
                               <FormItem label="密码">
                                   <Input type="password" placeholder="请输入您的密码" />
                               </FormItem>
                               <FormItem label="确认密码">
                                   <Input type="password" placeholder="请再次输入您的密码"/>
                               </FormItem>
                               <Button type="primary" htmlType="submit">注册</Button>
                           </Form>
                       </TabPane>
                   </Tabs>
               </Modal>
           </div>
        )
    }
}

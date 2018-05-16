import {observable, autorun, computed, action} from 'mobx'


class UserInfo {
    @observable userName = ''
    @observable userId = ''
    @observable isLogin = false
    @observable showLoginModal = false

    @action.bound setLoginModel(value) {
        this.showLoginModal = value
    }

    @action.bound login(userName, userId) {
        this.userName = userName
        this.userId = userId
        this.isLogin = true
        this.setLoginModel(false)
    }
    @action.bound logout() {
        this.userName = ''
        this.userId = ''
        this.isLogin = false
    }
}

export default new UserInfo();

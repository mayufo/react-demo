import axios from 'axios'
import qs from 'qs'

axios.defaults.transformRequest = [data => qs.stringify(data)]
axios.defaults.baseURL = 'http://newsapi.gugujiankong.com/'


function checkStatus(response) {
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response.data || response
    }
    if (response.status === 404) {
        alert('网络异常')
    }
}

function checkCode(res) {
    console.log(res)
    if (res.status === 500) {
        alert(`${res.status}${res.msg} 这肯定是后端的锅！`)
    }
    return res
}

export default {
    get (url, params) {
        return axios.get(url, {params: params})
            .then(
                (response) => {
                    console.log(1);
                    return checkStatus(response)
                }
            ).catch(
                (error) => {
                    return checkCode(JSON.parse(JSON.stringify(error)).response)
                }
            )
    },
    post (url, data) {
        return axios.post(url, data)
            .then(
                (response) => {
                    return checkStatus(response)
                }
            ).catch(
                (error) => {
                    return checkCode(JSON.parse(JSON.stringify(error)).response)
                }
            )
    }
}

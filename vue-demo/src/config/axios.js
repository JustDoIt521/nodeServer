import axios from 'axios'

const Axios = axios.create({
    baseURL: '//127.0.0.1:9529',
    timeout: 5000,
    headers: {'Content-Type': 'text/html'},
})

// 请求前拦截器
Axios.interceptors.request.use((req) => {
    console.warn('send request', req);
    return req;
}, (err) => {
    console.warn('request error', err);
})

// 响应后拦截器
Axios.interceptors.response.use((res) => {
    console.warn('get response', res);
    return res;
}, (err) => {
    console.warn('response error', err);
})

export default Axios;
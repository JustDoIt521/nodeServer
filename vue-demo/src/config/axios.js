import axios from 'axios'

const Axios = axios.create({
    baseURL: '//127.0.0.1:9529',
    timeout: 5000,
    headers: {'Content-Type': 'text/html'},
})

// 请求前拦截器
Axios.interceptors.request.use((req) => {
    console.log('发送请求  path %s | paramas => ', req.url, req.data);
    return req;
}, (err) => {
    console.log('请求发送失败', err);
})

// 响应后拦截器
Axios.interceptors.response.use((res) => {
    console.log('接收结果 path %s  | result =>' , res.config.url, res.data);
    return res;
}, (err) => {
    console.warn('接收结果失败', err);
})

export default Axios;
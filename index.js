const app = require('./baseApp.js')
const url = require('url')

const router  = require('./routers/mainPage.js')
app.all('*', (req, res, next) => {
    console.log('request is from ', url.parse(req.url).pathname);

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'token'); // 允许浏览器可以拿到响应头内的token
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,token'); // 允许前端可以在请求头设置的参数类型有 token  content-type

    next();
})

app.use('', router);

const server = app.listen(8088, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('server is listen at ', host, port);
})
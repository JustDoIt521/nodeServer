const Router = require('.');

function registerRoutes (router) {
    registeEntryHtml(router);
}

function registeEntryHtml (router) {
    let fs = require('fs');

    router.get('/index.html', (req, res) => {
        //  服务是启动在主文件夹下  因此寻找路径 是以文件夹为跟路径
        fs.readFile('asset/index.html', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, { 'Content-Type': 'text/html'})
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html'})
                res.write(data.toString());
            }
            res.end();
        })
    })
}

module.exports = registerRoutes;
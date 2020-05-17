const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    filenameHashing: true,
    configureWebpack: {  // 使用configureWebpack 配置文件别名路径
        resolve: {
            alias: {
                '@views': resolve('src/views'),
                '@components': resolve('src/components'),
            }
        }
    }
}
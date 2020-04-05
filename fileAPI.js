var fs = require('fs');

function fileApi(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                resolve(null);
            } else {
                resolve(data.toString());
            }
        })
    })
}

module.exports = fileApi;
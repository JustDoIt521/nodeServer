var fs = require('fs');

const fileApi = function(path) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            return null;
            // res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            return data.toString();
            // res.writeHead(200, {'Content-Type': 'text/html'});
            // res.write(data.toString());
            // console.log('res success');
        }
    })
}

export default fileApi;
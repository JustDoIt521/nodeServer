
function testAPI(router) {
    router.get('/yahha', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write('yahhh');
        res.end();
    })
}

module.exports = {
    testAPI,
}
var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.send('root');
})

router.get('/one', (req, res) => {
    res.send('one');
})

router.get('/two', (req, res) => {
    res.send('two');
})

router.post('/three', (req, res) => {
    res.send('three');
})

module.exports = router;
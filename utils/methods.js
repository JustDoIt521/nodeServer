const jwt = require('jsonwebtoken');

function setToken ( user = {}, secret = 'dktoken') {
    user = {
        name: 'yahaha',
    }

    return jwt.sign(user, secret, {
        'expiresIn': 60 // 60s有效期
    })
}

module.exports = {
    setToken
}
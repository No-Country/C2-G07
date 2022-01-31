const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env;

function jwtGenerator(usuario_id){
    const payload = {
        usuario: usuario_id
    }

    return jwt.sign(payload, JWT_SECRET, {expiresIn: "1hr"})
}

module.exports = jwtGenerator;
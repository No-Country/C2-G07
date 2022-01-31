const jwt = require('jsonwebtoken');

const {JWT_SECRET} = process.env
module.exports = async (req, res, next) => {

    try{
        const jwtToken = req.header('token')
        if(!jwtToken) return res.status(403).json({message: 'No autorizado'})
        const payload = jwt.verify(jwtToken, JWT_SECRET)
        req.usuario = payload.usuario;
        next()
    }catch(err){
        console.error(err.message);
        return res.status(403).json('no autorizado')
    }
}
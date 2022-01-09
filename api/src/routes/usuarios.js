const{Router} = require('express');
const { v4: uuidv4 } = require("uuid");
const{Usuario} = require('../db')

const router = Router();

router.get('/usuario', async(req, res, next) =>{
        
    let usuario = await Usuario.findAll()
    res.json(usuario)
})
router.post('/usuario', async(req, res, next) => {  
    try{
        const{name, email, token, imagen, password} = req.body
        let nuevoUsuario = await Usuario.create({
            usuario_id: uuidv4(),
            name,
            email,
            token,
            imagen,
            password
        })

        res.json(nuevoUsuario)
    }catch(err){
        next(err)
    }
})

module.exports = router;
const { Router } = require('express');
const { v4: uuidv4 } = require("uuid");
const{Categoria} = require('../db')

const router = Router();
router.get('/categorias', async(req, res, next) =>{
        
    let categoria = await Categoria.findAll()
    res.json(categoria)
})


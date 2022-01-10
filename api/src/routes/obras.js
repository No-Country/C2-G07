const { Router } = require('express');
const { v4: uuidv4 } = require("uuid");
const{Obra} = require('../db')

const router = Router();
router.get('/obras', async(req, res, next) =>{
        
    let obra = await Obra.findAll()
    res.json(obra)
})
module.exports = router;









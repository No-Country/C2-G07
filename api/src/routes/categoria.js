const { Router } = require('express');
const { v4: uuidv4 } = require("uuid");
const{Category,ObraArte} = require('../db')

const router = Router();
router.get('/categoria', async(req, res, next) =>{
        
    let categoria = await Category.findAll({
        include: { model: ObraArte},
        order:[['cat_descripcion','asc']]
    })
    res.json(categoria)

})
module.exports = router;
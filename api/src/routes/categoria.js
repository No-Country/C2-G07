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

router.post("/categoria", async (req, res, next) => {
    try {
        const {
            cat_id,
            cat_descripcion,
        } = req.body;
        let nuevaCategoria = await Category.create({
            cat_id,
            cat_descripcion,
        });
        res.json(nuevaCategoria)
    } catch (err) {
        next(err);
    }
});

router.delete("/categoria/:cat_id", async (req, res, next) => {
    const { cat_id } = req.params;

    const catDelete = await Category.findOne({ icat_id: cat_id })
    if (catDelete) {
        catDelete
            .destroy()
            .then(() => res.status(200).json({ message: "Categoria Eliminada" }))
            .catch((err) => next(err));
    }else{
        res.status(400).json({ message: `La categoria no existe en la BD` });
    }        
});
module.exports = router;
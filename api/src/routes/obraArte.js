const { Router } = require("express");
const {v4: uuidv4} = require('uuid');
const {ObraArte, Categoria, Usuario} = require('../db')

const router = Router();

router.get('/obraArte', async (req, res, next) => {
    let obraArte = await ObraArte.findAll();
    res.json(obraArte)
})

router.post('/obraArte', async (req, res, next) => {
    try{
        const{oa_name, oa_descripcion, oa_fechaCreacion,oa_imagen_obra, cat_id, usuario_id} = req.body;

        let nuevaObra = ObraArte.create({
            oa_id: uuidv4(),
            oa_name,
            oa_descripcion,
            oa_fechaCreacion,
            oa_oculto: false,
            oa_imagen_obra
        })
        console.log(cat_id)
        //await nuevaObra.setCategoria(cat_id);
        // await nuevaObra.addUsuario(usuario_id);
        res.json(nuevaObra)
    }catch(err){
        next(err);
    }
})

module.exports = router;
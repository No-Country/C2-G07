const { Router } = require('express');
// Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');
const obra = require ('./obras')
const usuario = require ('./usuarios')
const categoria = require ('./categorias')

const router = Router();
router.get('/', (req, res)=> {
    res.render ("inicio",)
})

// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);
router.use ('/', obra);
router.use ('/', usuario);
router.use ('/', categoria);

module.exports = router;

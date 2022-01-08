const { Router } = require('express');
// Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');
const obra = require ('./obras')
const usuario = ('/usuarios')
const categoria = ('/categorías')

const router = Router();
router.get('/', (req, res)=> {
    res.render ("inicio",)
})

// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);
router.use ('/obras', obra);
router.use ('/usuarios', usuario);
router.use ('/categorías', categoria);

module.exports = router;

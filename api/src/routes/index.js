const { Router } = require('express');
// Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get('/', (req, res)=> {
    res.render ("inicio",)
})


const router = Router();
router.get('/obras', (req, res)=> {
    res.render ("obras",)
})


// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);


module.exports = router;

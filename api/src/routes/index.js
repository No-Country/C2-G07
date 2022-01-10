const { Router } = require('express');
// Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');
const usuario = require('./usuario')
const obraArte = require('./obraArte')

const router = Router();

// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);
router.use('/', usuario)
router.use('/', obraArte)


module.exports = router;

const { Router } = require('express');
// Importar todos los routers;
//Ejemplo: const authRouter = require('./auth.js');

const usuario = require('./Usuario')

const router = Router();

// Configurar los routers
//Ejemplo: router.use('/auth', authRouter);
router.use('/', usuario)

module.exports = router;

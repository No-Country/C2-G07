const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { Usuario, Rol } = require("../db");

const router = Router();

router.get("/usuario", async (req, res, next) => {
  let usuario = await Usuario.findByPk(req.query.id);
  res.json(usuario);
});

router.post("/usuario", async (req, res, next) => {
  try {
    const {
      usuario_name,
      usuario_email,
      usuario_token,
      usuario_imagen,
      usuario_password,
      rol_id,
    } = req.body;
    let nuevoUsuario = await Usuario.create({
      usuario_id: uuidv4(),
      usuario_name,
      usuario_email,
      usuario_token,
      usuario_imagen,
      usuario_password,
    });
     console.log(rol_id)
     //↓ asigno rol (si no funciona con set probar con add por ejemplo: addRol en vez de setRol)
    await nuevoUsuario.setRol(rol_id)
    res.json(nuevoUsuario);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { Usuario, Rol, ObraArte } = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const autorizacion = require("../middleware/autorizacion")


const router = Router();

router.get("/usuario", async (req, res, next) => {
  //let usuario = await Usuario.findByPk(req.query.id);
  let usuario = await Usuario.findAll();
  res.json(usuario);
});

router.get("/usuario/:id", async (req, res, next) => {
  try {
    let usuario = await Usuario.findByPk(req.params.id, {
      include: { model: ObraArte },
    });
    res.json(usuario);
  } catch (err) {
    res.next(err);
  }
});

router.post("/usuario", async (req, res, next) => {
  const { name, email, password, imagen } = req.body;
  try {
    //buscamos si el usuario ya existe
    const usuario = await Usuario.findOne({
      where: { usuario_email: email },
    });

    if (usuario) return res.json("el usuario ya existe.!");

    //encriptamos la password que viene por body
    const salt = 10;
    const generarSalt = await bcrypt.genSalt(salt);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //en caso que no exista el usuario lo creamos en la BD
    const nuevoUsuario = await Usuario.create({
      usuario_id: uuidv4(),
      usuario_name: name,
      usuario_email: email,
      usuario_imagen: imagen,
      usuario_password: bcryptPassword,
    });

    //generamos el JWT token
    const token = jwtGenerator(nuevoUsuario.usuario_id);
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
});

router.post("/usuario/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({
      where: { usuario_email: email },
    });

    if (!usuario)return res.status(401).json({ message: "password o email incorrecto" });
    const validarPassword = await bcrypt.compare(password, usuario.usuario_password);
    if(!validarPassword)return res.status(401).json({ message: "password o email incorrecto"})

    const token = jwtGenerator(usuario.usuario_id)
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
});
router.delete("/:usuario_id", async (req, res, next) => {
  const { usuario_id } = req.params;
  const usuDelete = await Usuario.findOne({ us_id: usuario_id });
  if (usuDelete) {
    usuDelete
      .destroy()
      .then(() => res.status(200).json({ message: `Usuario eliminado` }))
      .catch((err) => next(err));
  } else {
    res.status(404).json({ message: `El usuario no existe en la BD` });
  }
});

router.put("/usuario/:usuario_id", autorizacion, async (req, res, next) => {
  const { usuario_id } = req.params;
  const { name, imagen, telefono, facebook, instagram, paginaweb } = req.body;

  const usuarioEdit = await Usuario.findOne({
    where: { usuario_id: usuario_id },
  });
  try {
    if (usuarioEdit) {
      usuarioEdit.usuario_name = name;
      usuarioEdit.usuario_imagen = imagen;
      usuarioEdit.usuario_telefono = telefono;
      usuarioEdit.usuario_facebook = facebook;
      usuarioEdit.usuario_instagram = instagram;
      usuarioEdit.usuario_paginaweb = paginaweb;
      await usuarioEdit.save();
      res.json(usuarioEdit);
    } else {
      res.json("El usuario no existe en la BD");
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;

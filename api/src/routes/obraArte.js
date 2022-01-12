const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { ObraArte, Usuario, Categoria } = require("../db");
const { Op } = require("sequelize");

const router = Router();

router.get("/obraArte", async (req, res, next) => {
  let { name } = req.query; //este valor es el que viene del front   //localhost:3001/obraArte?name=va_el valor_a_buscar
  if (!name) {
    let obraArte = await ObraArte.findAll({
      order:[['oa_name',req.query.order]],
      include:{model: Usuario}
    });
    res.json(obraArte);
  } else {
    let obraArte = await ObraArte.findAll({
      where: { oa_name: { [Op.like]: `${name}%` } },
    });
    res.json(obraArte);
  }
});


router.post("/obraArte", async (req, res, next) => {
  try {
    const {
      oa_name,
      oa_descripcion,
      oa_fechaCreacion,
      oa_imagen_obra,
      usuario_id,
      cat_id
    } = req.body;

    let nuevaObra = await ObraArte.create({
      oa_id: uuidv4(),
      oa_name,
      oa_descripcion,
      oa_fechaCreacion,
      oa_oculto: false,
      oa_imagen_obra,
    });
    await nuevaObra.setUsuario(usuario_id);
    await nuevaObra.setCategory(cat_id);
    res.json(nuevaObra);
  } catch (err) {
    next(err);
  }
});

router.put('/obraArte/:oa_id', async (req, res, next) => {
  const { oa_id } = req.params;
  const {
    oa_name,
    oa_descripcion,
    oa_fechaCreacion,
    oa_imagen_obra,
    cat_id
  } = req.body;

  try {
    const oaEdit = await ObraArte.findOne({ where: { oa_id: oa_id } });
    if (oaEdit) {
      oaEdit.oa_name = oa_name;
      oaEdit.oa_descripcion = oa_descripcion;
      oaEdit.oa_fechaCreacion = oa_fechaCreacion;
      oaEdit.oa_imagen_obra = oa_imagen_obra;
      oaEdit.cat_id = cat_id;
      await oaEdit.save();
      res.json(oaEdit)
    } else {
      res.json({ message: `El ID Recibido: ${oa_id} no exite en la bd` })
    }

  } catch (err) { next(err) }
});

router.delete('/:oa_id', async (req, res, next) => {
  const { oa_id } = req.params;
  const oaDelete = await ObraArte.findOne({ ioa_id: oa_id });
  if (oaDelete) {
    oaDelete.destroy()
      .then(() =>
        res
          .status(200)
          .json({ message: `Obra de arte eliminada` })
      )
      .catch((err) => next(err))
  } else {
    res.status(404).json({ message: `La obra de arte no existe en la BD` })
  }
})

module.exports = router;

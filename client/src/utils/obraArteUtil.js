export default function crearObraArte({ input }, url) {
  let {
    oa_name,
    oa_resenia,
    oa_descripcion,
    oa_fechaCreacion,
    cat_id,
    usuario_id,
  } = input;

  let body = {
    oa_name,
    oa_resenia,
    oa_descripcion,
    oa_fechaCreacion,
    oa_imagen_obra: url,
    usuario_id,
    cat_id,
  };

  fetch("http://localhost:3001/obraArte", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  alert("Obra de arte creada!");
}

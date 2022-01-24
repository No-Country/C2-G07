export default function updateUser({ input }, id) {
  let {name, imagen, telefono, facebook, instagram, paginaweb} = input;
  let body = {
    name,
    imagen ,
    telefono,
    facebook,
    instagram,
    paginaweb,
  };
  fetch("http://localhost:3001/usuario/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  alert("Datos de usuarios Modificados!");
}

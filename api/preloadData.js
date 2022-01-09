const {v4: uuidv4} = require('uuid');

async function createData(){
    const roles = [
        {rol_id: 1, rol_descripcion: "root"},
        {rol_id: 2, rol_descripcion: "artista"}
    ]

   const categoria =[
       {cat_id: 1, cat_descripcion: "Realismo"},
       {cat_id: 2, cat_descripcion: "Hiperrealismo"},
       {cat_id: 3, cat_descripcion: "Surrealismo"},
       {cat_id: 4, cat_descripcion: "Impresionismo"},
       {cat_id: 5, cat_descripcion: "Expresionismo"},
       {cat_id: 6, cat_descripcion: "Arte abstracto"},
       {cat_id: 7, cat_descripcion: "Arte Pop"},
   ]

    return {roles, categoria}
}
module.exports = { createData };
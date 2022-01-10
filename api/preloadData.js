const {v4: uuidv4} = require('uuid');

async function createData(){
    const roles = [
        {rol_id: 1, rol_descripcion: "root"},
        {rol_id: 2, rol_descripcion: "artista"}
    ]

   const categoria =[
       {cat_id: 1, cat_descripcion: "fotografia"},
       {cat_id: 2, cat_descripcion: "pintura"},
       {cat_id: 3, cat_descripcion: "escultura"},
       {cat_id: 4, cat_descripcion: "arte digital"},  
   ]

    return {roles, categoria}
}
module.exports = { createData };
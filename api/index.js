//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
require("dotenv").config();
const { conn, Category, Rol, Usuario, ObraArte} = require("./src/db.js");
const { createData } = require("./preloadData.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log(`listening at ${process.env.PORT}`);
    const datos = await createData();
    const roles = await Rol.bulkCreate(datos.roles);
    console.log("**** ROLES CREADOS");
    const categoria = await Category.bulkCreate(datos.categoria);
    console.log("**** CATEGORIAS CREADAS");
    const usuario = await Usuario.bulkCreate(datos.usuario);
    console.log("**** USUARIOS CREADOS");
    const obraArte = await ObraArte.bulkCreate(datos.obraArte)
    console.log("**** OBRA DE ARTES CREADAS")
  });
});

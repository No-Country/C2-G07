const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categoria', {
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    cat_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

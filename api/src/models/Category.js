const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('category', {
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

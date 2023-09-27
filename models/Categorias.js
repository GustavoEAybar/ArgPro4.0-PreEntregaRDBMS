const { DataTypes } = require("sequelize");
const { db } = require("../config/db.js");

  const Categorias = db.define('Categorias', {
    categorias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoria: {
      type: DataTypes.STRING(50)
    }
  }, { tableName: "Categorias", timestamps: false });

  module.exports = Categorias;
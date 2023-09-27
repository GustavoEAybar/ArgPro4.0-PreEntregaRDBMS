const { DataTypes } = require("sequelize");
const { db } = require("../config/db.js");

  const Generos = db.define('Generos', {
    generos_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    tipoDeGenero: {
      type: DataTypes.STRING(150),
    }
  }, { tableName: "Generos", timestamps: false });

  module.exports = Generos;
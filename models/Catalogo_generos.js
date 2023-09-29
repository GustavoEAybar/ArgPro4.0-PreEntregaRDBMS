const { DataTypes } = require("sequelize");
const { db } = require("../config/db.js");

  const Catalogo_generos = db.define('Catalogo_generos', {
    trama_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  }, { tableName: "Catalogo_generos", timestamps: false });

  module.exports = Catalogo_generos;
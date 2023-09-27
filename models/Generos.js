const { Sequelize } = require("sequelize");
const { db } = require("../config/db.js");

  const Generos = db.define('Generos', {
    generos_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    tipoDeGenero: {
      type: Sequelize.STRING(150),
    }
  }, { tableName: "Generos", timestamps: false });

  module.exports = Generos;
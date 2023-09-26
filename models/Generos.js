const Sequelize = require("sequelize");
const { db } = require("../config/db");

  const Generos = db.define('Generos', {
    generos_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tipoDeGenero: {
      type: Sequelize.STRING(150),
    }
  }, { tableName: "Generos", timestamps: false });

  module.exports = Generos;
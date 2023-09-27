const { Sequelize } = require("sequelize");
const { db } = require("../config/db.js");

  const Catalogo_generos = db.define('Catalogo_generos', {
    trama_id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    catalogo_id: {
      type: Sequelize.INTEGER,
    },
    generos_id: {
      type: Sequelize.INTEGER,
    },
  }, { tableName: "Catalogo_generos", timestamps: false });

  module.exports = Catalogo_generos;
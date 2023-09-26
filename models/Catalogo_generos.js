const Sequelize = require("sequelize");
const { db } = require("../config/db");

  const Catalogo_generos = db.define('Catalogo_generos', {
    generos_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    catalogo_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  }, { tableName: "Catalogo_generos", timestamps: false });

  module.exports = Catalogo_generos;
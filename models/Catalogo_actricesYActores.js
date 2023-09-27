const { Sequelize } = require("sequelize");
const { db } = require("../config/db.js");

  const Catalogo_actricesYActores = db.define('Catalogo_actricesYActores', {
    reparto_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    catalogo_id: {
      type: Sequelize.INTEGER,
    },
    actricesYActores_id:{
      type: Sequelize.INTEGER,
    },
  }, { tableName: "Catalogo_actricesYActores", timestamps: false });

  module.exports = Catalogo_actricesYActores;
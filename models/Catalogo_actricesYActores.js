const Sequelize = require("sequelize");
const { db } = require("../config/db");

  const Catalogo_actricesYActores = db.define('Catalogo_actricesYActores', {
    actoricesYActores_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    catalogo_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  }, { tableName: "Catalogo_actricesYActores", timestamps: false });

  module.exports = Catalogo_actricesYActores;
const Sequelize = require("sequelize");
const { db } = require("../config/db");

  const ActricesYActores = db.define('ActricesYActores', {
    actricesYActores_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombreCompleto: {
      type: Sequelize.STRING(250)
    }
  }, { tableName: "ActricesYActores", timestamps: false });

  module.exports = ActricesYActores;
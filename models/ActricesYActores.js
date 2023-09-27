const { DataTypes } = require("sequelize");
const { db } = require("../config/db.js");

  const ActricesYActores = db.define('ActricesYActores', {
    actricesYActores_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombreCompleto: {
      type: DataTypes.STRING(250)
    }
  }, { tableName: "ActricesYActores", timestamps: false });

  module.exports = ActricesYActores;
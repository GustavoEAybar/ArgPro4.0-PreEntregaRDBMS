const { DataTypes } = require("sequelize");
const { db } = require("../config/db.js");

  const Catalogo_actricesYActores = db.define('Catalogo_actricesYActores', {
    reparto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  }, { tableName: "Catalogo_actricesYActores", timestamps: false });

  module.exports = Catalogo_actricesYActores;
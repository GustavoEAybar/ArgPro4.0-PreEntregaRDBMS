const Sequelize = require("sequelize");
const { db } = require("../config/db");

  const Catalogo = db.define('Catalogo', {
    Catalogo_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    Nombre_Catalogo: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  }, { tableName: "Catalogo", timestamps: false });

  module.exports = Catalogo;
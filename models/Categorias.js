const Sequelize = require("sequelize");
const { db } = require("../config/db");

  const Categorias = db.define('Categorias', {
    categorias_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoria: {
      type: Sequelize.STRING(50)
    }
  }, { tableName: "Categorias", timestamps: false });

  module.exports = Categorias;
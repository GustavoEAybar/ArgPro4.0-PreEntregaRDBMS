const { DataTypes } = require("sequelize");
const { db } = require("../config/db.js");

  const TrilerflixView = db.define('TrilerflixView', {
    catalogo_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    poster:{
        type: DataTypes.STRING,
        allowNull: true
    },
    titulo:{
        type: DataTypes.STRING,
    },
    categoria:{
        type: DataTypes.STRING,
    },
    genero:{
        type: DataTypes.STRING,
    },
    resumen:{
        type: DataTypes.STRING
    },
    temporada:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    reparto:{
        type: DataTypes.STRING,
    },
    triler:{
        type: DataTypes.STRING,
        allowNull: true
    },
  }, { tableName: "TrilerflixView", timestamps: false });

  module.exports = TrilerflixView;
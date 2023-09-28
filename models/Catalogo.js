const { DataTypes } = require('sequelize');
const { db } = require('../config/db.js');

const Catalogo = db.define('Catalogo', {
    catalogo_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    poster:{
        type: DataTypes.STRING(200),
        allowNull: true
    },
    titulo:{
        type: DataTypes.STRING(150),
    },
    categorias_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    resumen:{
        type: DataTypes.STRING
    },
    temporada:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    triler:{
        type: DataTypes.STRING(200),
        allowNull: true
    },
}, { tableName: "Catalogo", timestamps: false });

module.exports = Catalogo;
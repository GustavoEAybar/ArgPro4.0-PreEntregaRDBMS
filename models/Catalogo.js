const { Sequelize } = require('sequelize');
const { db } = require('../config/db.js');

const Catalogo = db.define('Catalogo', {
    catalogo_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    poster:{
        type: Sequelize.STRING(200),
        allowNull: true
    },
    titulo:{
        type: Sequelize.STRING(150),
    },
    categoria_id:{
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    resumen:{
        type: Sequelize.TEXT
    },
    temporada:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    triler:{
        type: Sequelize.STRING(200),
        allowNull: true
    },
});

module.exports = Catalogo;
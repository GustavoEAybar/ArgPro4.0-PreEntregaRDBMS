const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
      dotenv.config();

// const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
})

module.exports = {db};
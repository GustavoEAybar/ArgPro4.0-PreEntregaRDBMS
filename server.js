const express = require('express');
const app = express();

const sequelize = require('../Sequelize/src/routers/connection');
const Product = require('../Sequelize/src/models/product');

const port =process.env.PORT || 3000;

app.use(express.json());

app.get('/productos', async (req, res) => {
    try{
        await sequelize.authenticate()
        await Product.sync();
        const allProducts = await Product.findAll();
        const allProductsData = allProducts.map(product => product.dataValues);
        res.status(200).json(allProductsData);
    }catch(error){
        res.status(500).json({error: 'Error en el servidor', description: error.message});
    }
});

async function main() {
  try {
    await sequelize.authentiicate();
    console.log("Conexion exitosa a la base de datos.");
    await Product.sync();
    const allProducts = await Product.findAll();
    const allProductsData = allProducts.map((product) => product.dataValues);
    console.table(allProductsData);
  } catch (error) {
    console.error("Error de acceso a la bb.dd:", error);
  } finally {
    sequelize.close();
  }
}

main();

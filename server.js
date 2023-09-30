const express = require('express');
const { Op } = require('sequelize');
const app = express();
const { db } = require("./config/db.js");
const PORT = process.env.DB_PORT || 3000;

app.use(express.json());

app.use(async (req, res, next) => {
    try{
        await db.authenticate();
        next();
    }catch(error){
        res.status(500).json({error: 'Error en el servidor', description: error.message});
    }
});

const CategoriasRouter = require ("./routers/CategoriasRouter.js");
const GenerosRouter = require ("./routers/GenerosRouter.js");
const ActricesYActoresRouter = require ("./routers/ActricesYActoresRouter.js");
const CatalogoRouter = require ("./routers/CatalogoRouter.js");
const Catalogo_generosRouter = require ("./routers/Catalogo_generosRouter.js");
const Catalogo_actricesYActoresRouter = require ("./routers/Catalogo_actricesYActoresRouter.js");

app.get("/",(req, res) => {
    res.status(200).end("Bienvenidos a la API con MySQL y Sequelize");
});

app.use("/api",CategoriasRouter);
app.use("/api",GenerosRouter);
app.use("/api",ActricesYActoresRouter);
app.use("/api",CatalogoRouter);
app.use("/api",Catalogo_generosRouter);
app.use("/api",Catalogo_actricesYActoresRouter);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

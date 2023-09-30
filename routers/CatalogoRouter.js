const express = require('express');
const router = express.Router();
const CatalogoControllers = require('../controllers/CatalogoControllers.js');

router.get('/catalogo', CatalogoControllers.listarPeliculas);
router.get('/buscarPOS/id/:id', CatalogoControllers.obtenerPelOSerID);
router.get('/buscarPOS/nombre/:nombre', CatalogoControllers.obtenerPelOSerN);
router.get('/buscarPOS/genero/:genero', CatalogoControllers.obtenerPelOSerG);
router.get('/buscarPOS/categoria/:categoria', CatalogoControllers.obtenerPelOSerC);
router.post('/crearPOS', CatalogoControllers.crearPelOSer);
router.put('/actualizarPOS/:id', CatalogoControllers.actualizarPelOSer);
router.delete('/eliminarPOS/:id', CatalogoControllers.eliminarPelOSer);

module.exports = router;
const express = require('express');
const router = express.Router();
const CatalogoControllers = require('../controllers/CatalogoControllers.js');

// Rutas para las categorías
router.get('/catalogo', CatalogoControllers.listarPeliculas);//vista
router.get('/buscarPOSid/:id', CatalogoControllers.obtenerPelOSer);
// router.get('/buscarPOSnombre/:nombre', CatalogoControllers.obtenerPelOSer);
// router.get('/buscarPOSgenero/:genero', CatalogoControllers.obtenerPelOSer);
// router.get('/buscarPOScategoria/:categoria', CatalogoControllers.obtenerPelOSer);
router.post('/crearPOS', CatalogoControllers.crearPelOSer);
router.put('/actualizarPOS/:id', CatalogoControllers.actualizarPelOSer);
router.delete('/eliminarPOS/:id', CatalogoControllers.eliminarPelOSer);

module.exports = router;
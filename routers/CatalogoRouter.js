const express = require('express');
const router = express.Router();
const catalogoControllers = require('../controllers/catalogoControllers');

// Rutas para las categorías
router.get('/catalogo', catalogoControllers.listarPeliculas);
router.get('/buscarPOS/:id', catalogoControllers.obtenerPelOSer);
router.post('/crearPOS', catalogoControllers.crearPelOSer);
router.put('/actualizarPOS/:id', catalogoControllers.actualizarPelOSer);
router.delete('/eliminarPOS/:id', catalogoControllers.eliminarPelOSer);

module.exports = router;
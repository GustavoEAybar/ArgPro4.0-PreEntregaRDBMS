const express = require('express');
const router = express.Router();
const catalogoControllers = require('../controllers/catalogoControllers');

// Rutas para las categorías
router.get('/catalogo', catalogoControllers.listarPeliculas);
router.get('/catalogo/:id', catalogoControllers.obtenerPelicula);
router.post('/catalogo', catalogoControllers.crearPelicula);
router.put('/catalogo/:id', catalogoControllers.actualizarPelicula);
router.delete('/catalogo/:id', catalogoControllers.eliminarPelicula);

module.exports = router;
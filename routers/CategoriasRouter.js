const express = require('express');
const router = express.Router();
const categoriasControllers = require('../controllers/categoriasControllers.js');

// Rutas para las categorías
router.get('/categorias', categoriasControllers.listarCategorias);
router.get('/categoria/:id', categoriasControllers.obtenerCategoria);
router.post('/crearCategoria', categoriasControllers.crearCategoria);
router.put('/actualizarCategoria/:id', categoriasControllers.actualizarCategoria);
router.delete('/eliminarCategoria/:id', categoriasControllers.eliminarCategoria);

module.exports = router;
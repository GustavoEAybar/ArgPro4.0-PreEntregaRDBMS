const express = require('express');
const router = express.Router();
const categoriasControllers = require('../controllers/categoriasControllers');

// Rutas para las categorías
router.get('/categorias', categoriasControllers.listarCategorias);
router.get('/categoria/:id', categoriasControllers.obtenerCategoria);
router.post('/categorias', categoriasControllers.crearCategoria);
router.put('/categoria/:id', categoriasControllers.actualizarCategoria);
router.delete('/categoria/:id', categoriasControllers.eliminarCategoria);

module.exports = router;
const express = require('express');
const router = express.Router();
const catalogo_generosControllers = require('../controllers/catalogo_generosControllers');

// Rutas para las categorías
router.get('/categorias', catalogo_generosControllers.listarCategorias);
router.get('/categoria/:id', catalogo_generosControllers.obtenerCategoria);
router.post('/categorias', catalogo_generosControllers.crearCategoria);
router.put('/categoria/:id', catalogo_generosControllers.actualizarCategoria);
router.delete('/categoria/:id', catalogo_generosControllers.eliminarCategoria);

module.exports = router;
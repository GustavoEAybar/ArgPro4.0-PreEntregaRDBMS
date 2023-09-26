const express = require('express');
const router = express.Router();
const catalogo_actricesYActoresControllers = require('../controllers/catalogo_actricesYActoresControllers');

// Rutas para las categorías
router.get('/categorias', catalogo_actricesYActoresControllers.listarCategorias);
router.get('/categoria/:id', catalogo_actricesYActoresControllers.obtenerCategoria);
router.post('/categorias', catalogo_actricesYActoresControllers.crearCategoria);
router.put('/categoria/:id', catalogo_actricesYActoresControllers.actualizarCategoria);
router.delete('/categoria/:id', catalogo_actricesYActoresControllers.eliminarCategoria);

module.exports = router;
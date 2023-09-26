const express = require('express');
const router = express.Router();
const catalogo_generosControllers = require('../controllers/catalogo_generosControllers');

// Rutas para las categorías
router.get('/TramaDePOS/:id', catalogo_generosControllers.obtenerRelacion);
router.post('/crearTrama', catalogo_generosControllers.crearRelacion);
router.put('/actualizarTrama/:id', catalogo_generosControllers.actualizarRelacion);
router.delete('/eliminarTrama/:id', catalogo_generosControllers.eliminarRelacion);

module.exports = router;
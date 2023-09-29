const express = require('express');
const router = express.Router();
const catalogo_generosControllers = require('../controllers/Catalogo_generosControllers.js');

// Rutas para las categorías
router.get('/TramaDePOS', catalogo_generosControllers.obtenerRelacion);
router.post('/crearTrama', catalogo_generosControllers.crearRelacion);
router.put('/actualizarTrama/:id', catalogo_generosControllers.actualizarRelacion);
router.delete('/eliminarTrama/:id', catalogo_generosControllers.eliminarRelacion);

module.exports = router;
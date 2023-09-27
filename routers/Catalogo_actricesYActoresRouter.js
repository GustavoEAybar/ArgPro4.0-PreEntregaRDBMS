const express = require('express');
const router = express.Router();
const catalogo_actricesYActoresControllers = require('../controllers/catalogo_actricesYActoresControllers.js');

// Rutas para las categorías
router.get('/repartoDePOS/:id', catalogo_actricesYActoresControllers.obtenerRelacion);
router.post('/crearReparto', catalogo_actricesYActoresControllers.crearRelacion);
router.put('/actualizarReparto/:id', catalogo_actricesYActoresControllers.actualizarRelacion);
router.delete('/eliminarReparto/:id', catalogo_actricesYActoresControllers.eliminarRelacion);

module.exports = router;
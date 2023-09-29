const express = require('express');
const router = express.Router();
const catalogo_actricesYActoresControllers = require('../controllers/Catalogo_actricesYActoresControllers.js');

// Rutas para las categorías
router.get('/repartoDePOS', catalogo_actricesYActoresControllers.obtenerReparto);
router.post('/crearReparto', catalogo_actricesYActoresControllers.crearReparto);
router.put('/actualizarReparto/:id', catalogo_actricesYActoresControllers.actualizarReparto);
router.delete('/eliminarReparto/:id', catalogo_actricesYActoresControllers.eliminarReparto);

module.exports = router;
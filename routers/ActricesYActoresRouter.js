const express = require('express');
const router = express.Router();
const actricesYActoresControllers = require('../controllers/ActricesYActoresControllers.js');

// Rutas para las categorías
router.get('/actricesYActores', actricesYActoresControllers.listarActricesYActores);
router.get('/actricesYActores/:id', actricesYActoresControllers.obtenerActrisOActor);
router.post('/crearActricesYActores', actricesYActoresControllers.crearActrisOActor);
router.put('/actualizarActricesYActores/:id', actricesYActoresControllers.actualizarActrisOActor);
router.delete('/eliminarActricesYActores/:id', actricesYActoresControllers.eliminarActrisOActor);

module.exports = router;
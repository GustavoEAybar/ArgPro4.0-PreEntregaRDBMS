const express = require('express');
const router = express.Router();
const actricesYActoresControllers = require('../controllers/actricesYActoresControllers');

// Rutas para las categorías
router.get('/actricesYActores', actricesYActoresControllers.listarActricesYActores);
router.get('/actricesYActores/:id', actricesYActoresControllers.obtenerActrisOActor);
router.post('/actricesYActores', actricesYActoresControllers.crearActrisOActor);
router.put('/actricesYActores/:id', actricesYActoresControllers.actualizarActrisOActor);
router.delete('/actricesYActores/:id', actricesYActoresControllers.eliminarActrisOActor);

module.exports = router;
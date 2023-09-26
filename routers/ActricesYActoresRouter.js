const express = require('express');
const router = express.Router();
const actricesYActoresControllers = require('../controllers/actricesYActoresControllers');

// Rutas para las categorías
router.get('/actricesYActores', actricesYActoresControllers.listarCategorias);
router.get('/actricesYActores/:id', actricesYActoresControllers.obtenerCategoria);
router.post('/actricesYActores', actricesYActoresControllers.crearCategoria);
router.put('/actricesYActores/:id', actricesYActoresControllers.actualizarCategoria);
router.delete('/actricesYActores/:id', actricesYActoresControllers.eliminarCategoria);

module.exports = router;
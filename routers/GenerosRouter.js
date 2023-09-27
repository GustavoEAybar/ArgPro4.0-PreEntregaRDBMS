const express = require('express');
const router = express.Router();
const generosControllers = require('../controllers/generosControllers.js');

// Rutas para las categorías
router.get('/generos', generosControllers.listarGeneros);
router.get('/genero/:id', generosControllers.obtenerGenero);
router.post('/crearGeneros', generosControllers.crearGenero);
router.put('/actualizarGenero/:id', generosControllers.actualizarGenero);
router.delete('/eliminarGenero/:id', generosControllers.eliminarGenero);

module.exports = router;
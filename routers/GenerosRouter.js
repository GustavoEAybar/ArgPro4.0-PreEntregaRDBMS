const express = require('express');
const router = express.Router();
const generosControllers = require('../controllers/generosControllers');

// Rutas para las categorías
router.get('/generos', generosControllers.listarGeneros);
router.get('/genero/:id', generosControllers.obtenerGenero);
router.post('/generos', generosControllers.crearGenero);
router.put('/genero/:id', generosControllers.actualizarGenero);
router.delete('/genero/:id', generosControllers.eliminarGenero);

module.exports = router;
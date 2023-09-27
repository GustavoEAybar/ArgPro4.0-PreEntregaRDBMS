const { Generos, Catalogo, Catalogo_generos } = require("../config/associations.js");

async function listarGeneros(req, res) {
    try {
      const generos = await Generos.findAll();
      res.json(generos);
    } catch (error) {
      console.error("Error al consultar generos", error);
      res.status(500).json({ error: "Error al consultar generos" });
    }
  }
  
  // Controlador para crear un nuevo usuario
  const crearGenero = async(req, res) => {
    const { tipoDeGenero } = req.body;
  
    try {
      const nuevoGenero = await Generos.create({ tipoDeGenero });
      res.status(201).json(nuevoGenero);
    } catch (error) {
      console.error("Error al crear nuevo genero", error);
      res.status(500).json({ error: "Error al crear nuevo genero" });
    }
  }
  
  // Controlador para obtener un usuario por su ID
  const obtenerGenero = async (req, res) => {
    const genero_id = req.params.id;
  
    try {
      const generoSolicitado = await Generos.findByPk(genero_id);
      if (!generoSolicitado) {
        return res.status(404).json({ error: "Genero no encontrado" });
      }
      res.json(generoSolicitado);
    } catch (error) {
      console.error("Error al obtener genero", error);
      res.status(500).json({ error: "Error al obtener genero" });
    }
  }
  
  // Controlador para actualizar un usuario por su ID
  const actualizarGenero = async (req, res) => {
    const genero_id = req.params.id;
    const { tipoDeGenero } = req.body;
  
    try {
      const generoActualizar = await Generos.findByPk(genero_id);
      if (!generoActualizar) {
        return res.status(404).json({ error: "Genero no encontrado" });
      }
      await generoActualizar.update({ tipoDeGenero });
      res.json(generoActualizar);
    } catch (error) {
      console.error("Error al actualizar genero", error);
      res.status(500).json({ error: "Error al actualizar genero" });
    }
  }
  
  // Controlador para eliminar un usuario por su ID
  const eliminarGenero = async (req, res) => {
    const genero_id = req.params.id;
  
    try {
      const generoEliminar = await Generos.findByPk(genero_id);
      if (!generoEliminar) {
        return res.status(404).json({ error: "Genero no encontrado" });
      }
      await generoEliminar.destroy();
      res.json({ message: "Genero eliminado exitosamente" });
    } catch (error) {
      console.error("Error al eliminar el genero", error);
      res.status(500).json({ error: "Error al eliminar el genero" });
    }
  }

  module.exports = {
    listarGeneros,
    crearGenero,
    obtenerGenero,
    actualizarGenero,
    eliminarGenero
  };
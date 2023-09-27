const { ActricesYActores, Catalogo, Catalogo_actricesYActores} = require("../config/associations.js");

async function listarActricesYActores(req, res) {
    try {
      const todosLosAct = await ActricesYActores.findAll();
      res.json(todosLosAct);
    } catch (error) {
      console.error("Error al consultar Actores", error);
      res.status(500).json({ error: "Error al consultar Actores" });
    }
  }
  
  // Controlador para crear un nuevo usuario
  const crearActrisOActor = async(req, res) => {
    const { nombreCompleto } = req.body;
  
    try {
      const nuevoActor = await ActricesYActores.create({ nombreCompleto });
      res.status(201).json(nuevoActor);
    } catch (error) {
      console.error("Error al crear nuevo actor", error);
      res.status(500).json({ error: "Error al crear nuevo actor" });
    }
  }
  
  // Controlador para obtener un usuario por su ID
  const obtenerActrisOActor = async (req, res) => {
    const actricesYActores_id = req.params.id;
  
    try {
      const actor = await ActricesYActores.findByPk(actricesYActores_id);
      if (!actor) {
        return res.status(404).json({ error: "Actor no encontrado" });
      }
      res.json(actor);
    } catch (error) {
      console.error("Error al obtener el actor", error);
      res.status(500).json({ error: "Error al obtener el actor" });
    }
  }
  
  // Controlador para actualizar un usuario por su ID
  const actualizarActrisOActor = async (req, res) => {
    const actricesYActores_id = req.params.id;
    const { nombreCompleto} = req.body;
  
    try {
      const actor = await ActricesYActores.findByPk(actricesYActores_id);
      if (!actor) {
        return res.status(404).json({ error: "Actor no encontrado" });
      }
      await actor.update({ nombreCompleto });
      res.json(actor);
    } catch (error) {
      console.error("Error al actualizar el actor", error);
      res.status(500).json({ error: "Error al actualizar el actor" });
    }
  }
  
  // Controlador para eliminar un usuario por su ID
  const eliminarActrisOActor = async (req, res) => {
    const actricesYActores_id = req.params.id;
  
    try {
      const actor = await ActricesYActores.findByPk(actricesYActores_id);
      if (!actor) {
        return res.status(404).json({ error: "Actor no encontrado" });
      }
      await actor.destroy();
      res.json({ message: "Actor eliminado exitosamente" });
    } catch (error) {
      console.error("Error al eliminar el actor", error);
      res.status(500).json({ error: "Error al eliminar el actor" });
    }
  }

  module.exports = {
    listarActricesYActores,
    crearActrisOActor,
    obtenerActrisOActor,
    actualizarActrisOActor,
    eliminarActrisOActor
  };
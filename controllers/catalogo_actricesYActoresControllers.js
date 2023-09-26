const { Catalogo_actricesYActoresRouter, Catalogo, ActricesYActores } = require("../config/associations");

// Crear un nuevo registro de Post_Etiquetas
const crearRelacion = async (req, res) => {
    const { catalogo_id, actricesYActores_id } = req.body;
  
    try {
      const nuevaRelacion = await Catalogo_actricesYActoresRouter.create({
        catalogo_id,
        actricesYActores_id,
      });
  
      res.json(nuevaRelacion);
    } catch (error) {
      console.error("Error al crear un nuevo registro de reparto", error);
      res
        .status(500)
        .json({ error: "Error al crear un nuevo registro de reparto" });
    }
  };
  
  // Obtener todos los registros de Post_Etiquetas
  const obtenerRelacion = async (req, res) => {
    try {
      const reparto = await Catalogo_actricesYActoresRouter.findAll();
      res.json(reparto);
    } catch (error) {
      console.error("Error al obtener los registros de reparto", error);
      res
        .status(500)
        .json({ error: "Error al obtener los registros de reparto" });
    }
  };
  
  // Actualizar un registro de Post_Etiquetas por ID
  const actualizarRelacion = async (req, res) => {
    const { id } = req.params;
    const { catalogo_id, actricesYActores_id } = req.body;
  
    try {
      const repartoActualizar = await Catalogo_actricesYActoresRouter.findByPk(id);
      if (!repartoActualizar) {
        res
          .status(404)
          .json({ error: "Registro de reparto no encontrado" });
        return;
      }
  
      await repartoActualizar.update({
        catalogo_id,
        actricesYActores_id,
      });
  
      res.json(repartoActualizar);
    } catch (error) {
      console.error("Error al actualizar un registro", error);
      res
        .status(500)
        .json({ error: "Error al actualizar un registro" });
    }
  };
  
  // Eliminar un registro de Post_Etiquetas por ID
  const eliminarRelacion = async (req, res) => {
    const { id } = req.params;
  
    try {
      const eliminarRelacion = await Catalogo_actricesYActoresRouter.findByPk(id);
      if (!eliminarRelacion) {
        res
          .status(404)
          .json({ error: "Registro de relacion no encontrado" });
        return;
      }
  
      await eliminarRelacion.destroy();
  
      res.json({ message: "Registro de relacion eliminado exitosamente" });
    } catch (error) {
      console.error("Error al eliminar un registro de relacion", error);
      res
        .status(500)
        .json({ error: "Error al eliminar un registro de relacion" });
    }
  };
  
  
  module.exports = {
    crearRelacion,
    obtenerRelacion,
    actualizarRelacion,
    eliminarRelacion,
  };
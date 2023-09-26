const { Categorias, Catalogo } = require("../config/associations");

async function listarCategorias(req, res) {
    try {
      const categorias = await Categorias.findAll();
      res.json(categorias);
    } catch (error) {
      console.error("Error al consultar las categorias", error);
      res.status(500).json({ error: "Error al consultar las categorias" });
    }
  }
  
  // Controlador para crear un nuevo usuario
  const crearCategoria = async(req, res) => {
    const { categoria } = req.body;
  
    try {
      const nuevaCategoria = await Categorias.create({ categoria });
      res.status(201).json(nuevaCategoria);
    } catch (error) {
      console.error("Error al crear la categoria", error);
      res.status(500).json({ error: "Error al crear la categoria" });
    }
  }
  
  // Controlador para obtener un usuario por su ID
  const obtenerCategoria = async (req, res) => {
    const categoria_id = req.params.id;
  
    try {
      const categoria = await Usuario.findByPk(categoria_id);
      if (!categoria) {
        return res.status(404).json({ error: "Categoria no encontrada" });
      }
      res.json(categoria);
    } catch (error) {
      console.error("Error al obtener la categoria", error);
      res.status(500).json({ error: "Error al obtener la categoria" });
    }
  }
  
  // Controlador para actualizar un usuario por su ID
  const actualizarCategoria = async (req, res) => {
    const categoria_id = req.params.id;
    const { categoria } = req.body;
  
    try {
      const categoriaAModificar = await Categorias.findByPk(categoria_id);
      if (!categoriaAModificar) {
        return res.status(404).json({ error: "Categoria no encontrado" });
      }
      await categoriaAModificar.update({ categoria });
      res.json(categoriaAModificar);
    } catch (error) {
      console.error("Error al actualizar la categoria", error);
      res.status(500).json({ error: "Error al actualizar la categoria" });
    }
  }
  
  // Controlador para eliminar un usuario por su ID
  const eliminarCategoria = async (req, res) => {
    const categoria_id = req.params.id;
  
    try {
      const categoriaAEliminar = await Categorias.findByPk(categoria_id);
      if (!categoriaAEliminar) {
        return res.status(404).json({ error: "Categoria no encontrada" });
      }
      await categoriaAEliminar.destroy();
      res.json({ message: "Categoria eliminada exitosamente" });
    } catch (error) {
      console.error("Error al eliminar la categoria", error);
      res.status(500).json({ error: "Error al eliminar la categoria" });
    }
  }

  module.exports = {
    listarCategorias,
    crearCategoria,
    obtenerCategoria,
    actualizarCategoria,
    eliminarCategoria
  };
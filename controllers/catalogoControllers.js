const { Catalogo } = require("../config/associations"); // Importa el modelo Usuario

// Controlador para listar todos los usuarios
async function listarPeliculas(req, res) {
  try {
    const PeliculasYSeries = await Catalogo.findAll();
    res.json(PeliculasYSeries);
  } catch (error) {
    console.error("Error al consultar usuarios", error);
    res.status(500).json({ error: "Error al consultar usuarios" });
  }
}

// Controlador para crear un nuevo usuario
const crearPelOSer = async(req, res) => {
  const { poster, titulo, categoria_id, resumen, temporada, triler } = req.body;

  try {
    const nuevaPelOSer = await Catalogo.create({ poster, titulo, categoria_id, resumen, temporada, triler });
    res.status(201).json(nuevaPelOSer);
  } catch (error) {
    console.error("Error al crear un usuario", error);
    res.status(500).json({ error: "Error al crear un usuario" });
  }
}

// Controlador para obtener un usuario por su ID
const obtenerPelOSer= async (req, res) => {
  const catalogo_id = req.params.id;

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada." });
    }
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al obtener el usuario", error);
    res.status(500).json({ error: "Error al obtener la pelicula o serie" });
  }
}

// Controlador para actualizar un usuario por su ID
const actualizarPelOSer = async (req, res) => {
  const catalogo_id = req.params.id;
  const { poster, titulo, categoria_id, resumen, temporada, triler } = req.body;

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada." });
    }
    await PelOSer.update({ poster, titulo, categoria_id, resumen, temporada, triler });
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al actualizar los datos", error);
    res.status(500).json({ error: "Error al actualizar los datos" });
  }
}

// Controlador para eliminar un usuario por su ID
const eliminarPelOSer = async (req, res) => {
  const catalogo_id = req.params.id;

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrado" });
    }
    await PelOSer.destroy();
    res.json({ message: "Pelicula o serie eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar el contenido", error);
    res.status(500).json({ error: "Error al eliminar el contenido" });
  }
}

// Exporta los controladores
module.exports = {
  listarPeliculas,
  crearPelOSer,
  obtenerPelOSer,
  actualizarPelOSer,
  eliminarPelOSer,
};
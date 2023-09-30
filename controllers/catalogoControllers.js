const { Op } = require("sequelize");
const { where } = require("sequelize");
const { Catalogo, Categorias, Generos, ActricesYActores, Catalogo_actricesYActores, Catalogo_generos, TrilerflixView } = require("../config/associations.js"); // Importa el modelo Pelicula o Serie

// Controlador para listar todos los peliculas y series
async function listarPeliculas(req, res) {
  try {
    const PeliculasYSeries = await TrilerflixView.findAll();
    res.json(PeliculasYSeries);
  } catch (error) {
    console.error("Error al consultar peliculas y series", error);
    res.status(500).json({ error: "Error al consultar peliculas y series" });
  }
}

// Controlador para obtener un Pelicula o Serie por su ID
const obtenerPelOSerID= async (req, res) => {
  const catalogo_id = parseInt(req.params.id);

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada." });
    }
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al obtener el Pelicula o Serie", error);
    res.status(500).json({ error: "Error al obtener la pelicula o serie" });
  }
}
// Controlador para obtener un Pelicula o Serie por su ID
const obtenerPelOSerN= async (req, res) => {
  const titulo = req.params;

  try {
    const PelOSer = await Catalogo.findAll({where: { titulo }, });
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada. si esta ingresando y tomando las modificaciones" });
    }
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al obtener el Pelicula o Serie", error);
    res.status(500).json({ error: "Error al obtener la pelicula o serie" });
  }
}
// Controlador para obtener un Pelicula o Serie por su ID
const obtenerPelOSerG= async (req, res) => {
  const catalogo_id = parseInt(req.params.id);

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada." });
    }
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al obtener el Pelicula o Serie", error);
    res.status(500).json({ error: "Error al obtener la pelicula o serie" });
  }
}
// Controlador para obtener un Pelicula o Serie por su ID
const obtenerPelOSerC= async (req, res) => {
  const catalogo_id = parseInt(req.params.id);

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada." });
    }
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al obtener el Pelicula o Serie", error);
    res.status(500).json({ error: "Error al obtener la pelicula o serie" });
  }
}

// Controlador para crear un nuevo Pelicula o Serie
const crearPelOSer = async(req, res) => {
  const { poster, titulo, categoria_id, resumen, temporada, triler } = req.body;

  try {
    const nuevaPelOSer = await Catalogo.create({ poster, titulo, categoria_id, resumen, temporada, triler });
    res.status(201).json(nuevaPelOSer);
  } catch (error) {
    console.error("Error al crear un Pelicula o Serie", error);
    res.status(500).json({ error: "Error al crear un Pelicula o Serie" });
  }
}

// Controlador para actualizar un Pelicula o Serie por su ID
const actualizarPelOSer = async (req, res) => {
  const catalogo_id = req.params.id;
  const { poster, titulo, categorias_id, resumen, temporada, triler } = req.body;

  try {
    const PelOSer = await Catalogo.findByPk(catalogo_id);
    if (!PelOSer) {
      return res.status(404).json({ error: "Pelicula o serie no encontrada." });
    }
    await PelOSer.update({ poster, titulo, categorias_id, resumen, temporada, triler });
    res.json(PelOSer);
  } catch (error) {
    console.error("Error al actualizar los datos", error);
    res.status(500).json({ error: "Error al actualizar los datos" });
  }
}

// Controlador para eliminar un Pelicula o Serie por su ID
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
  obtenerPelOSerID,
  obtenerPelOSerN,
  obtenerPelOSerG,
  obtenerPelOSerC,
  crearPelOSer,
  actualizarPelOSer,
  eliminarPelOSer,
};
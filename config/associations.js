const Categorias = require("../models/Categorias.js");
const Generos = require("../models/Generos.js");
const ActricesYActores = require("../models/ActricesYActores.js");
const Catalogo = require("../models/Catalogo.js");
const Catalogo_actricesYActores = require("../models/Catalogo_actricesYActores.js");
const Catalogo_generos = require("../models/Catalogo_generos.js");
const TrilerflixView = require("../models/TrilerflixView");

Categorias.hasMany(Catalogo, { foreignKey: "categorias_id" });
Catalogo.belongsTo(Categorias, { foreignKey: "categorias_id" });

Catalogo.belongsToMany(ActricesYActores, {
  through: Catalogo_actricesYActores,
  foreignKey: "catalogo_id",
  otherKey: "actricesYActores_id",
});

ActricesYActores.belongsToMany(Catalogo, {
  through: Catalogo_actricesYActores,
  foreignKey: "ActricesYActores_id",
  otherKey: "catalogo_id",
});

Catalogo.belongsToMany(Generos, {
  through: Catalogo_generos,
  foreignKey: "catalogo_id",
  otherKey: "generos_id",
});

Generos.belongsToMany(Catalogo, {
  through: Catalogo_generos,
  foreignKey: "generos_id",
  otherKey: "catalogo_id",
});

module.exports = {
  Categorias,
  Generos,
  ActricesYActores,
  Catalogo,
  Catalogo_actricesYActores,
  Catalogo_generos,
  TrilerflixView
};

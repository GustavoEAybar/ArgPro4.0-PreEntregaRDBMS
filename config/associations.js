const Categorias = require('../models/Categorias');
const Generos = require('../models/Generos');
const ActricesYActores = require('../models/ActricesYActores');
const Catalogo = require('../models/Catalogo');
const Catalogo_generos = require('../models/Catalogo_generos');
const Catalogo_actricesYActores = require('../models/Catalogo_actricesYActores');

Categorias.hasMany(Catalogo, {foreignKey: 'idCategorias'});
Catalogo.belongsTo(Categorias,{foreignKey:'idCategorias'});


ActricesYActores.belongsToMany(Catalogo,{through: Catalogo_actricesYActores, foreignkey: 'idActricesYActores'});
Catalogo.belongsToMany(ActricesYActores,{through: Catalogo_actricesYActores, foreignkey: 'idCatalogo'});
Generos.belongsToMany(Catalogo,{through: Catalogo_generos, foreignkey: 'idGeneros'});
Catalogo.belongsToMany(Generos,{through: Catalogo_generos, foreignkey:'idCatalogo'});

module.exports = {
    Categorias,
    Generos,
    ActricesYActores,
    Catalogo,
    Catalogo_generos,
    Catalogo_actricesYActores,
};
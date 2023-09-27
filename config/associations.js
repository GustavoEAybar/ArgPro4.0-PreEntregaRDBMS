const Categorias = require('../models/Categorias.js');
const Generos = require('../models/Generos.js');
const ActricesYActores = require('../models/ActricesYActores.js');
const Catalogo = require('../models/Catalogo.js');
const Catalogo_generos = require('../models/Catalogo_generos.js');
const Catalogo_actricesYActores = require('../models/Catalogo_actricesYActores.js');

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
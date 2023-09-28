const Categorias = require('../models/Categorias.js');
const Generos = require('../models/Generos.js');
const ActricesYActores = require('../models/ActricesYActores.js');
const Catalogo = require('../models/Catalogo.js');
const Catalogo_generos = require('../models/Catalogo_generos.js');
const Catalogo_actricesYActores = require('../models/Catalogo_actricesYActores.js');

Categorias.hasMany(Catalogo, {foreignKey: 'categorias_id'});
Catalogo.belongsTo(Categorias,{foreignKey:'categorias_id'});


Catalogo.belongsToMany(ActricesYActores,{through: 'Catalogo_actricesYActores', foreignkey: 'catalogo_id'});

ActricesYActores.belongsToMany(Catalogo,{through: 'Catalogo_actricesYActores', foreignkey: 'actricesYActores_id'});

Catalogo.belongsToMany(Generos,{through: 'Catalogo_generos', foreignkey:'catalogo_id'});

Generos.belongsToMany(Catalogo,{through: 'Catalogo_generos', foreignkey: 'generos_id'});

module.exports = {
    Categorias,
    Generos,
    ActricesYActores,
    Catalogo,
    Catalogo_generos,
    Catalogo_actricesYActores,
};
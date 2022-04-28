//configurations (voir le fichier config.js dans le dossier config)
const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
//Initiailisation de la base de donnée
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Importation des les models
db.categorie = require("../models/categorie.model.js")(sequelize, Sequelize);
db.film = require("../models/film.model.js")(sequelize, Sequelize);
db.cinema = require("../models/cinema.model.js")(sequelize, Sequelize);
db.place = require("../models/place.model.js")(sequelize, Sequelize);
db.projection = require("../models/projection.model.js")(sequelize, Sequelize);
db.salle = require("../models/salle.model.js")(sequelize, Sequelize);
db.seance = require("../models/seance.model.js")(sequelize, Sequelize);
db.ticket = require("../models/ticket.model.js")(sequelize, Sequelize);
db.ville = require("../models/ville.model.js")(sequelize, Sequelize);
//les différentes associations
//relation entre ville et cinema
db.ville.hasOne(db.cinema, { foreignKey: "villeId" });
db.cinema.belongsTo(db.ville, { foreignKey: "villeId" });
// relation entre salle et cinema
db.cinema.hasMany(db.salle, { foreignKey: "cinemaId" });
// relation entre ticket et place
db.place.hasOne(db.ticket, { foreignKey: "placeId" });
// relation entre salle et film
db.salle.hasOne(db.film, { foreignKey: "salleId" });
db.film.belongsTo(db.salle, { foreignKey: "salleId" });
// relation entre salle et place
db.salle.hasMany(db.place, { foreignKey: "salleId" });
// relation entre categorie et film
db.categorie.hasOne(db.film, { foreignKey: "categorieId" });
db.film.belongsTo(db.categorie, { foreignKey: "categorieId" });
// relation entre seance et projection
db.seance.hasOne(db.projection, { foreignKey: "seanceId" });
// relation entre salle et projection
db.salle.hasOne(db.projection, { foreignKey: "salleId" });
// relation entre ticket et projection
db.projection.belongsTo(db.ticket, { foreignKey: "ticketId" });
// relation entre film et projection
db.projection.belongsTo(db.film, { foreignKey: "filmId" });

module.exports = db;

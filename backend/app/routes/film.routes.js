const controller = require("../controllers/film.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerFilm", controller.creerFilm);
  app.delete("/supprimerFilm/:filmId", controller.supprimerFilm);
  app.get("/lesFilms", controller.lesFilms);
  app.put("/modifierFilm/:filmId", controller.modifierFilm);
};

const controller = require("../controllers/cinema.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerCinema", controller.creerCinema);
  app.delete("/supprimerCinema/:cinemaId", controller.supprimerCinema);
  app.get("/lesCinemas", controller.lesCinemas);
  app.put("/modifierCinema/:cinemaId", controller.modifierCinema);
};

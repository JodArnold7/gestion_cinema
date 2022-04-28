const controller = require("../controllers/seance.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerSeance", controller.creerSeance);
  app.delete("/supprimerSeance/:seanceId", controller.supprimerSeance);
  app.get("/lesSeances", controller.lesSeances);
  app.put("/modifierSeance/:seanceId", controller.modifierSeance);
};

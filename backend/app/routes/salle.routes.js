const controller = require("../controllers/salle.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerSalle", controller.creerSalle);
  app.delete("/supprimerSalle/:salleId", controller.supprimerSalle);
  app.get("/lesSalles", controller.lesSalles);
  app.put("/modifierSalle/:salleId", controller.modifierSalle);
};

const controller = require("../controllers/ville.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerVille", controller.creerVille);
  app.delete("/supprimerVille/:villeId", controller.supprimerVille);
  app.get("/lesVilles", controller.lesVilles);
  app.put("/modifierVille/:villeId", controller.modifierVille);
};

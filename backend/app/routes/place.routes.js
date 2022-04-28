const controller = require("../controllers/place.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerPlace", controller.creerPlace);
  app.delete("/supprimerPlace/:placeId", controller.supprimerPlace);
  app.get("/lesPlaces", controller.lesPlaces);
  app.put("/modifierPlace/:placeId", controller.modifierPlace);
};

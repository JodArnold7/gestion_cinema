const controller = require("../controllers/projection.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerProjection", controller.creerProjection);
  app.delete(
    "/supprimerProjection/:projectionId",
    controller.supprimerProjection
  );
  app.get("/lesProjections", controller.lesProjections);
  app.put("/modifierProjection/:projectionId", controller.modifierProjection);
};

const controller = require("../controllers/categorie.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerCategorie", controller.creerCategorie);
  app.delete("/supprimerCategorie/:categorieId", controller.supprimerCategorie);
  app.get("/lesCategories", controller.lesCategories);
  app.put("/modifierCategorie/:categorieId", controller.modifierCategorie);
};

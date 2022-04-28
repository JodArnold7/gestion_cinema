const controller = require("../controllers/ticket.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/creerTicket", controller.creerTicket);
  app.delete("/supprimerTicket/:ticketId", controller.supprimerTicket);
  app.get("/lesTickets", controller.lesTickets);
  app.put("/modifierTicket/:ticketId", controller.modifierTicket);
};

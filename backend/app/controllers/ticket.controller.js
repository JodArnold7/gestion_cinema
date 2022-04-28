const db = require("../models");
const { ticket: Ticket } = db;
//saisie et ajout dun ticket
exports.creerTicket = async (req, res) => {
  Ticket.create({
    nom_client: req.body.nom_client,
    prix_ticket: req.body.prix_ticket,
    code_payement: req.body.code_payement,
    placeId: req.body.placeId,
  })
    .then(() => {
      return res.status(200).send({ message: "Ticket crée avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//modification dun ticket
exports.modifierTicket = async (req, res) => {
  Ticket.update(
    {
      nom_client: req.body.nom_client,
      prix_ticket: req.body.prix_ticket,
      code_payement: req.body.code_payement,
      placeId: req.body.placeId,
    },
    {
      where: {
        id: req.params.ticketId,
      },
    }
  )
    .then(() => {
      return res.status(200).send({ message: "Ticket modifié avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//Suppression dun film
exports.supprimerTicket = async (req, res) => {
  Ticket.destroy({
    force: true,
    where: {
      id: req.params.ticketId,
    },
  });
  return res.status(200).send({ message: "Ticket supprimé avec succes!" });
};
//Consulation de tous les tickets
exports.lesTickets = async (req, res) => {
  Ticket.findAll()
    .then((tickets) => {
      if (!tickets) {
        return res.status(404).send({ message: "Aucun ticket retrouvée" });
      }
      return res.status(200).send({ tickets });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

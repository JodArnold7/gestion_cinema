const db = require("../models");
const { projection: Projection } = db;
//saisie et ajout dune projection
exports.creerProjection = async (req, res) => {
  Projection.create({
    date: req.body.date,
    prix: req.body.prix,
    salleId: req.body.salleId,
    filmId: req.body.filmId,
    seanceId: req.body.seanceId,
    ticketId: req.body.ticketId,
  })
    .then(() => {
      return res.status(200).send({ message: "Projection crée avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//modification dune projection
exports.modifierProjection = async (req, res) => {
  Projection.update(
    {
      date: req.body.date,
      prix: req.body.prix,
      salleId: req.body.salleId,
      filmId: req.body.filmId,
      seanceId: req.body.seanceId,
      ticketId: req.body.ticketId,
    },
    {
      where: {
        id: req.params.projectionId,
      },
    }
  )
    .then(() => {
      return res
        .status(200)
        .send({ message: "Projection modifié avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//Suppression dune projection
exports.supprimerProjection = async (req, res) => {
  Projection.destroy({
    force: true,
    where: {
      id: req.params.projectionId,
    },
  });
  return res.status(200).send({ message: "Projection supprimé avec succes!" });
};
//Consulation de toutes les projections
exports.lesProjections = async (req, res) => {
  Projection.findAll()
    .then((projections) => {
      if (!projections) {
        return res.status(404).send({ message: "Aucune projection retrouvée" });
      }
      return res.status(200).send({ projections });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

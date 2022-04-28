const db = require("../models");
const { salle: Salle } = db;
// saisie et ajout dune salle
exports.creerSalle = async (req, res) => {
  Salle.create({
    nom: req.body.nom,
    numero: req.body.numero,
    cinemaId: req.body.cinemaId,
  })
    .then(() => {
      return res.status(200).send({ message: "Salle crée avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//modification dune salle
exports.modifierSalle = async (req, res) => {
  Salle.update(
    {
      nom: req.body.nom,
      numero: req.body.numero,
      cinemaId: req.body.cinemaId,
    },
    {
      where: {
        id: req.params.salleId,
      },
    }
  )
    .then(() => {
      res.status(200).send({ message: "Salle modifiée avec succes!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//Suppression de la salle
exports.supprimerSalle = async (req, res) => {
  Salle.destroy({
    force: true,
    where: {
      id: req.params.salleId,
    },
  });
  return res.status(200).send({ message: "Salle supprimée avec succes!" });
};
//Consulation de toutes les salles
exports.lesSalles = async (req, res) => {
  Salle.findAll()
    .then((salles) => {
      if (!salles) {
        return res.status(404).send({ message: "Aucune salle retrouvée" });
      }
      return res.status(200).send({ salles });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

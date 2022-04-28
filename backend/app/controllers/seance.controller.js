const db = require("../models");
const { seance: Seance } = db;
// saisie et ajout dune seance
exports.creerSeance = async (req, res) => {
  Seance.create({
    numero: req.body.numero,
    heure_de_debut: req.body.heure_de_debut,
  })
    .then(() => {
      res.status(200).send({ message: "Seance crée avec succes!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//modification d'une seance
exports.modifierSeance = async (req, res) => {
  Seance.update(
    {
      numero: req.body.numero,
      heure_de_debut: req.body.heure_de_debut,
    },
    {
      where: {
        id: req.params.seanceId,
      },
    }
  )
    .then(() => {
      return res.status(200).send({ message: "Seance modifié avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//Suppression d'une seance
exports.supprimerSeance = async (req, res) => {
  Seance.destroy({
    force: true,
    where: {
      id: req.params.seanceId,
    },
  });
  return res.status(200).send({ message: "Seance supprimée avec succes!" });
};
//Consulation de toutes les seances
exports.lesSeances = async (req, res) => {
  Seance.findAll()
    .then((seances) => {
      if (!seances) {
        return res.status(404).send({ message: "Aucune seance retrouvée" });
      }
      return res.status(200).send({ seances });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

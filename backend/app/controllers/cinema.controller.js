const db = require("../models");
const { cinema: Cinema } = db;
//saisie et ajout dun cinema
exports.creerCinema = async (req, res) => {
  Cinema.create({
    code: req.body.code,
    nom: req.body.nom,
    position_geographique: req.body.position_geographique,
    villeId: req.body.villeId,
  })
    .then(() => {
      return res.status(200).send({ message: "Cinema crée avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//modification dun cinema
exports.modifierCinema = async (req, res) => {
  Cinema.update(
    {
      code: req.body.code,
      nom: req.body.nom,
      position_geographique: req.body.position_geographique,
      villeId: req.body.villeId,
    },
    {
      where: {
        id: req.params.cinemaId,
      },
    }
  )
    .then(() => {
      return res.status(200).send({ message: "Cinema modifié avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//Suppression dun cinema
exports.supprimerCinema = async (req, res) => {
  Cinema.destroy({
    force: true,
    where: {
      id: req.params.cinemaId,
    },
  });
  return res.status(200).send({ message: "Cinema supprimé avec succes!" });
};
//Consulation de tous les cinemas
exports.lesCinemas = async (req, res) => {
  Cinema.findAll()
    .then((cinemas) => {
      if (!cinemas) {
        return res.status(404).send({ message: "Aucun cinema retrouvée" });
      }
      return res.status(200).send({ cinemas });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const db = require("../models");
const { place: Place } = db;
//saisie et ajout de la place
exports.creerPlace = async (req, res) => {
  Place.create({
    numero: req.body.numero,
    position_geographique: req.body.position_geographique,
    salleId: req.body.salleId,
  })
    .then(() => {
      return res.status(200).send({ message: "Place crée avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//modification de la place
exports.modifierPlace = async (req, res) => {
  Place.update(
    {
      numero: req.body.numero,
      position_geographique: req.body.position_geographique,
      salleId: req.body.salleId,
    },
    {
      where: {
        id: req.params.placeId,
      },
    }
  )
    .then(() => {
      return res.status(200).send({ message: "Place modifié avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//Suppression de la place
exports.supprimerPlace = async (req, res) => {
  Place.destroy({
    force: true,
    where: {
      id: req.params.placeId,
    },
  });
  return res.status(200).send({ message: "Place supprimée avec succes!" });
};
//Consulation de toutes les places
exports.lesPlaces = async (req, res) => {
  Place.findAll()
    .then((places) => {
      if (!places) {
        return res.status(404).send({ message: "Aucune place retrouvée" });
      }
      return res.status(200).send({ places });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

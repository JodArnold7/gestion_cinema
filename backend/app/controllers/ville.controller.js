const db = require("../models");
const { ville: Ville } = db;
// saisie et ajout de la ville
exports.creerVille = async (req, res) => {
  Ville.create({
    nom: req.body.nom,
  })
    .then(() => {
      res.status(200).send({ message: "Ville crée avec succes!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//modification de la ville
exports.modifierVille = async (req, res) => {
  Ville.update(
    {
      nom: req.body.nom,
    },
    {
      where: {
        id: req.params.villeId,
      },
    }
  )
    .then(() => {
      res.status(200).send({ message: "Ville modifier avec succes!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//Suppression de la ville
exports.supprimerVille = async (req, res) => {
  Ville.destroy({
    force: true,
    where: {
      id: req.params.villeId,
    },
  });
  return res.status(200).send({ message: "Ville supprimée avec succes!" });
};
//Consulation de toutes les villes
exports.lesVilles = async (req, res) => {
  Ville.findAll()
    .then((villes) => {
      if (!villes) {
        return res.status(404).send({ message: "Aucune ville retrouvée" });
      }
      return res.status(200).send({ villes });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

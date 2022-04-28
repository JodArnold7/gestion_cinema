const db = require("../models");
const { categorie: Categorie } = db;
// saisie et ajout de categorie
exports.creerCategorie = async (req, res) => {
  Categorie.create({
    nom: req.body.nom,
    description: req.body.description,
  })
    .then(() => {
      res.status(200).send({ message: "Categorie crée avec succes!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//modification de la categorie
exports.modifierCategorie = async (req, res) => {
  Categorie.update(
    {
      nom: req.body.nom,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.categorieId,
      },
    }
  )
    .then(() => {
      res.status(200).send({ message: "Categorie modifier avec succes!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
//Suppression de la categorie
exports.supprimerCategorie = async (req, res) => {
  Categorie.destroy({
    force: true,
    where: {
      id: req.params.categorieId,
    },
  });
  return res.status(200).send({ message: "Categorie supprimée avec succes!" });
};
//Consulation de toutes les categories
exports.lesCategories = async (req, res) => {
  Categorie.findAll()
    .then((categories) => {
      if (!categories) {
        res.status(404).send({ message: "Aucune categorie retrouvée" });
      }
      return res.status(200).send({ categories });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

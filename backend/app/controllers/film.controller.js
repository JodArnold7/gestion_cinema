const db = require("../models");
const { film: Film } = db;
//saisie et ajout dun film
exports.creerFilm = async (req, res) => {
  Film.create({
    nom: req.body.nom,
    date_de_sortie: req.body.date_de_sortie,
    salleId: req.body.salleId,
    categorieId: req.body.categorieId,
  })
    .then(() => {
      return res.status(200).send({ message: "Film crée avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//modification dun film
exports.modifierFilm = async (req, res) => {
  Film.update(
    {
      nom: req.body.nom,
      date_de_sortie: req.body.date_de_sortie,
      salleId: req.body.salleId,
      categorieId: req.body.categorieId,
    },
    {
      where: {
        id: req.params.filmId,
      },
    }
  )
    .then(() => {
      return res.status(200).send({ message: "Film modifié avec succes!" });
    })
    .catch((err) => {
      return res.status(500).send({ message: err.message });
    });
};
//Suppression dun film
exports.supprimerFilm = async (req, res) => {
  Film.destroy({
    force: true,
    where: {
      id: req.params.filmId,
    },
  });
  return res.status(200).send({ message: "Film supprimé avec succes!" });
};
//Consulation de tous les films
exports.lesFilms = async (req, res) => {
  Film.findAll()
    .then((films) => {
      if (!films) {
        return res.status(404).send({ message: "Aucun film retrouvée" });
      }
      return res.status(200).send({ films });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

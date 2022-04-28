//Chaque seance est definie par son numero et lheure de debut de la seance
module.exports = (sequelize, Sequelize) => {
  const Seance = sequelize.define(
    "seance",
    {
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      heure_de_debut: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Seance;
};

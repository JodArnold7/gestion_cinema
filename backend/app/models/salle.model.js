//chaque salle qui est definie par son nom, son numero contient un ensemble de place
module.exports = (sequelize, Sequelize) => {
  const Salle = sequelize.define(
    "Salle",
    {
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Salle;
};

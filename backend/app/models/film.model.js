module.exports = (sequelize, Sequelize) => {
  const Film = sequelize.define(
    "film",
    {
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_de_sortie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Film;
};

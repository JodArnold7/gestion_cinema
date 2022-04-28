module.exports = (sequelize, Sequelize) => {
  const Categorie = sequelize.define(
    "categorie",
    {
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Categorie;
};

module.exports = (sequelize, Sequelize) => {
  const Ville = sequelize.define(
    "ville",
    {
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Ville;
};

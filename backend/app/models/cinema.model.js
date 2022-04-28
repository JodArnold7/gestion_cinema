//chaque cinema se trouvant dans une ville est defini par son code, son nom et sa position geographique
module.exports = (sequelize, Sequelize) => {
  const Cinema = sequelize.define(
    "cinema",
    {
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position_geographique: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Cinema;
};

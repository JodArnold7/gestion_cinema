//chaque place a un numero et est position geographiquement
module.exports = (sequelize, Sequelize) => {
  const Place = sequelize.define(
    "place",
    {
      numero: {
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

  return Place;
};

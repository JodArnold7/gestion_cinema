//chaque projection se deroule dans une seance, concerne un film, et se deroule dans une salle a une date de projection et un prix fixe
module.exports = (sequelize, Sequelize) => {
  const Projection = sequelize.define(
    "projection",
    {
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prix: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Projection;
};

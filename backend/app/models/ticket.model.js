module.exports = (sequelize, Sequelize) => {
  const Ticket = sequelize.define(
    "ticket",
    {
      nom_client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prix_ticket: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code_payement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Ticket;
};

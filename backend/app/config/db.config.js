module.exports = {
  HOST: "localhost",
  USER: "jodthetechgoat",
  PASSWORD: "Jodarnold3003#@@#",
  DB: "gestion_de_cinema",
  dialect: "postgres",
  PORT: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

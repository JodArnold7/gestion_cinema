const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
const app = express();
var logger = require("morgan");
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Jod Backend" });
});
const db = require("./app/models");

// Initialisation de la base de donnée, apres le premier lancement du serveur, vous devez commentez les 3 lignes suivantes pour eviter de renitiailiser la base de donnée à chaque fois que votre serveur est relancé
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
});*/
require("./app/routes/categorie.routes")(app);
require("./app/routes/projection.routes")(app);
require("./app/routes/ville.routes")(app);
require("./app/routes/seance.routes")(app);
require("./app/routes/ticket.routes")(app);
require("./app/routes/place.routes")(app);
require("./app/routes/film.routes")(app);
require("./app/routes/cinema.routes")(app);
require("./app/routes/salle.routes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

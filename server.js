const port = 5000;
const dotenv = require("dotenv");
const app = require("./app.js");
const mongoose = require("mongoose");
dotenv.config({
  path: "./var.env",
});

mongoose
  .connect(
    process.env.MONGO_DATABASE_URI.replace(
      "<password>",
      process.env.MONGO_DATABASE_PASSWORD
    ),
    {}
  )
  .then(() => {
    console.log("Connection a la base donnees reussie");
  })
  .catch((err) => {
    console.log(
      "une erreur est survenue lors de la connection a la base de donnée"
    );

    console.log(err);
  });

app.listen(port, () => {
  console.log(`Votre serveur a été demarré http://localhost:${port}`);
});

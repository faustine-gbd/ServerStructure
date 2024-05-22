const express = require("express");
const app = express();
const globalErrorHandler = require("./controllers/errorController.js");
const clientRouter = require("./routes/clientRouter.js");
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "hello world",
  });
});
app.use("/server/v1/clients", clientRouter);
app.use(globalErrorHandler);
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Pas de point d'entré ${req.originalUrl} sur ce server`,
  });
});

module.exports = app;

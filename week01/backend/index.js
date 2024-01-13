const express = require('express');
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongodb = require("./database/connection");
const professionalRoutes = require("./routes/professional");

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {res.setHeader('Access-Control-Allow-Origin', '*');next();})
app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    Console.log(`Connected to the Database on port ${port}`);
  }
});
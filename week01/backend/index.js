const express = require('express');
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 8080;
 
app.use(express.static("public"));

app.get("/api/professional", (req, res) => {
  res.json(profesionalData);
});

 
app.listen(port, () => {
  console.log(`Web Server is listening at port ${port}`);
});
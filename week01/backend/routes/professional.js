const express = require("express");

const professionalRoutes = require("../controllers/professional");

const router = express.Router();

router.get("/", professionalRoutes.getData);

module.exports = router;
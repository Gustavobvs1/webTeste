const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/pages/index.ejs");
});

router.get("/carrossel", (req, res) => {
  res.render("../views/pages/carrossel");
});

router.get("/cadastro", (req, res) => {
  res.render("../views/pages/cadastro");
});

module.exports = router;

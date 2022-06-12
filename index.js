require("dotenv").config;

const express = require("express");
const app = express();

// display static files
app.use(express.static("public"));

// router
const router = require("./app/router");
app.use(router);

// server
const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`Running server on : http://localhost:${PORT}`);
});

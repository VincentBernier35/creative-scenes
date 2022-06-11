const express = require("express");
const router = express.Router();
const sceneController = require("./controller/controller");

router.get("/api/scene", sceneController.getOne);


module.exports = router;
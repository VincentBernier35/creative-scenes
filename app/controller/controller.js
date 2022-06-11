const Scene = require("../model/scene");

const sceneController = {
  getOne(req, res) {
    console.log("log from sceneController.getOne");
    const scene = new Scene();

    res.json(scene.phrase);
    console.log("getOne => ", scene);

  }
};

module.exports = sceneController;
const Scene = require("../model/scene");

const sceneController = {
  getOne(req, res) {
    const scene = new Scene();

    res.json(scene.phrase);
    console.log("getOne => ", scene);

  }
};

module.exports = sceneController;
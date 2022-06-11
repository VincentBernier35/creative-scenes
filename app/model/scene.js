const sceneService = require("../service/scene");

class Scene {
  constructor() {
    const newScene = sceneService.generate();

    this.personage = newScene.personage;
    this.action = newScene.action;
    this.venue = newScene.venue;
    this.includ = newScene.includ;

    this.completeScene = newScene.toString();
  }
}

module.exports = Scene;

const newScene = new Scene();

console.log("log from model =>", newScene instanceof Scene);


// this "scene" service is here to handle everything related to cadex

const data = require("../../data/parts.json");
const randomService = require("./random");

const sceneService = {
  // génère une scène
  generate() {
    return {
      personage: sceneService.getRandomPersonage(),
      action: sceneService.getRandomAction(),
      venue: sceneService.getRandomVenue(),
      includ: sceneService.getRandomInclud(),
      toString() {
        return `${this.personage} ${this.action} ${this.venue} ${this.includ} `
      },
    };
  },
  getRandomPersonage(){
    return sceneService.getRandomElement("personages");
  },
  getRandomAction(){
    return sceneService.getRandomElement("actions");
  },
  getRandomVenue(){
    return sceneService.getRandomElement("venues");
  },
  getRandomInclud(){
    return sceneService.getRandomElement("includs");
  },
  getRandomElement(property) {
    const indexRandom = randomService.getRandomNumber(data[property].length -1);
    return data[property][indexRandom];
  }
};

module.exports = sceneService;
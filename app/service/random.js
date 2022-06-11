// it's a service which aims to provide a random number

const randomService = {
  getRandomNumber(max) {
    return Math.round(Math.random() * max);
  },
};

module.exports = randomService;
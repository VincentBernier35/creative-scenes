const app = {
  // http://localhost:4000/api
  baseUrl: `${location.origin}/api`,
  container: document.querySelector("main"),

  init: async () => {
    console.log(location.origin);
    await app.fetchCadex();

  },

  clearWords: () => {
    const words = app.container.querySelectorAll(".word");
    for (const word of words) {
      word.remove();
    }
  },
  createword: (word, index) => {
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = word;
    span.style.animationDelay = `${index / 4}s`;
    return span;
  },
  displayPhrase: (phrase) => {
    // on retire l'éventuelle phrase affichée précédemment
    app.clearWords();
    // on récupère chaque mot dans un tableau
    const words = phrase.split(" ");
    // on crée un span avec un délai d'affichage pour l'animation
    const spans = words.map(app.createWord);
    // on ajoute les spans en spreadant le tableau
    app.container.append(...spans);
  },
  // récupération d'un cadex aléatoire ou configuré via la queryString
  // cette string est stockée dans la variable location.search, on la retransmet telle quelle à la route
  fetchCadex: async () => {
    try {
      // http://localhost:4000/api/scene
      const response = await fetch(`${app.baseUrl}/scene${location.search}`);
      console.log("response =>", response);
      const phrase = await response.json();
      app.displayPhrase(phrase);
    } catch (error) {
      console.error(error);
    }
  }
};

document.addEventListener("DOMContentLoaded", app.init);
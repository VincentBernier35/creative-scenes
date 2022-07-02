// 1. je récupère les données via les json
const data = require("../parts.json");


console.log(data);
// 2. je les insère dans la BDD
// 2.1 je me connecte à la bdd
require("dotenv").config(); // je ne précise pas le chemin car je vais lancer le script depuis la racine où se trouve le dotenv
const { Client } = require("pg");
const client = new Client();


(async () => {
  // la connexion est asynchrone, je dois attendre qu'elle se fasse avant toute requête en BDD
  await client.connect();

  // je supprime les données - TRUNCATE est plus effice pour vider la table que le DELETE
  await client.query("TRUNCATE TABLE post,category");

  // 2.2 je parcours les catégories
  const categoriesBDD = [];
  for (const category of categories) {
    // 2.3 j'insère les catégories
    // console.log(category);
    const {rows} = await client.query("INSERT INTO public.category(label, route) VALUES ($1, $2) RETURNING id,label", [category.label, category.route]);

    categoriesBDD.push(rows[0]);
  }

  console.log(categoriesBDD);

  // 2.4 je parcours les posts
  for (const post of posts) {
    // je vais chercher l'id de la catégorie dans mon tableau via le label présent dans post
    //console.log(post.category);
    const categoryId = categoriesBDD.find(function(category){ 
      return category.label == post.category ;
    }).id;
    // const categoryId = categoriesBDD.find(category=>category.label == post.category).id;

    // 2.5 j'insère les posts
    await client.query("INSERT INTO public.post(slug, category_id, title, excerpt, content) VALUES ($1, $2, $3, $4, $5)", [post.slug, categoryId  ,post.title,post.excerpt,post.content]);
  }

  // 3. je libère la connexion
  client.end();
})();
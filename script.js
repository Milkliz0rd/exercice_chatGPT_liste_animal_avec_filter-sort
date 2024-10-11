//ajout du titre en JS pour m'exercer et voir si JS était bien relié

const sectionAnimal = document.querySelector(".titre");
const titreAnimal = document.createElement("h1");
titreAnimal.innerText = "Les animaux";
sectionAnimal.appendChild(titreAnimal);

//-----------------ajouter une animal à la liste --------------

// on créé une liste animals
const animals = ["lion", "girafe", "éléphant", "ours"];
// on récupère les éléments du Dom
const animalInput = document.querySelector("#animal-input");
const addButton = document.querySelector("#add-button");
const sortButton = document.querySelector("#sort-button");
const FilterInput = document.querySelector("#filter-input");
const animalList = document.querySelector("#animal-list");

// Fonction pour afficher les animaux dans la liste et les animaux filtré par la suite
function addAnimalsOnDisplay(Filteredanimals) {
  // Vide la liste avant d'afficher les éléments
  animalList.innerHTML = "";
  // Parcourt le tableau et ajoute chaque animal à la liste
  Filteredanimals.forEach((animal) => {
    // création des élément li
    const li = document.createElement("li");
    // contenu des éléments li
    li.innerText = animal;
    // ajout des éléments li à la list
    animalList.appendChild(li);
  });
}
//--------------------------------------------------------------------------------
// Ajouter un animal via un listener
addButton.addEventListener("click", () => {
  // on créé une variable pour la valeur de notre input
  const inputValue = animalInput.value.trim();
  // on fait une condition si au click on a de la valeur dans notre input
  if (inputValue) {
    // on ajoute la valeur à notre liste
    animals.push(inputValue);
    // Réinitialise le champ texte
    animalInput.value = "";
    // Affiche la liste actualisée
    addAnimalsOnDisplay(animals);
  }
});
//-----------ajout un listener sur l'input pour valider avec "enter"---------------

animalInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    animals.push(animalInput.value);
    animalInput.value = "";
    addAnimalsOnDisplay(animals);
  }
});

//---------------------------------------------------------------------------------

// Trier les animaux avec un listener
sortButton.addEventListener("click", () => {
  // on utilise la fonction pour trier notre liste (par défaut ce sera par ordre alphabétique)
  animals.sort();
  // Affiche la liste triée
  addAnimalsOnDisplay(animals);
});
//---------------------------------------------------------------------------------
// Filtrer les animaux par la première lettre avec un listener
FilterInput.addEventListener("input", () => {
  // on créé une variable qui sera la valeur de notre filterInput
  const FilteredLetter = FilterInput.value.toLowerCase();
  // on créé une variable qui filtrera notre liste par rapport à la valeur de notre filterInput (pour la première lettre la fonction est: startsWith)
  const Filteredanimals = animals.filter((animal) =>
    animal.toLowerCase().startsWith(FilteredLetter)
  );
  // on affiche la liste trié
  addAnimalsOnDisplay(Filteredanimals);
});
//----------------------------------------------------------------------------------
//on affiche la liste original
addAnimalsOnDisplay(animals);

//ajout du titre en JS pour m'exercer et voir si JS était bien relié

const sectionAnimal = document.querySelector(".titre");
const titreAnimal = document.createElement("h1");
titreAnimal.innerText = "Les animaux"
sectionAnimal.appendChild(titreAnimal);

//-----------------ajouter une animal à la liste --------------
// On crée une liste animals
const animals = [];
// On ajoute tous les éléments du Dom
const animalInput = document.getElementById('animal-input');
const addButton = document.getElementById('add-button');
const sortButton = document.getElementById('sort-button');
const filterInput = document.getElementById('filter-input');
const animalList = document.getElementById('animal-list');

// Fonction pour afficher les animaux dans la liste et les animaux filtré par la suite
function displayAnimals(filteredAnimals) {
  // Vide la liste avant d'afficher les éléments
  animalList.innerHTML = '';
  
  // Parcourt le tableau et ajoute chaque animal à la liste
  filteredAnimals.forEach(animal => {
  // création des élément li
    const li = document.createElement('li');
  // contenu des éléments li  
    li.textContent = animal;
  // ajout des éléments li à la list  
    animalList.appendChild(li);
  });
}

// Ajouter un animal via un listener 
addButton.addEventListener('click', () => {
  // on créé une variable pour la valeur de notre input
  const animal = animalInput.value.trim();
  // on fait une condition si au click on a de la valeur dans notre input
  if (animal) {
    // on ajoute la valeur à notre liste
    animals.push(animal);
    // Réinitialise le champ texte
    animalInput.value = ''; 
    // Affiche la liste actualisée
    displayAnimals(animals); 
  }
});

// Trier les animaux avec un listener
sortButton.addEventListener('click', () => {
  // on utilise la fonction pour trier (par défaut ce sera par ordre alphabétique)
  animals.sort();
  // Affiche la liste triée
  displayAnimals(animals); 
});

// Filtrer les animaux par la première lettre avec un listener
filterInput.addEventListener('input', () => {
  // on créé une variable qui sera la valeur de notre filterInput
  const filterLetter = filterInput.value.toLowerCase();
  // on créé une variable qui filtrera notre liste par rapport à la valeur de notre filterInput (pour la première lettre la fonction est: startsWith)
  const filteredAnimals = animals.filter(animal => 
    animal.toLowerCase().startsWith(filterLetter)
  );
  // on affiche la liste trié
  displayAnimals(filteredAnimals);
});
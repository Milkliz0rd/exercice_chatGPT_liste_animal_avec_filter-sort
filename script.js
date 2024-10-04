//ajout du titre en JS pour m'exercer et voir si JS était bien relié

const sectionAnimal = document.querySelector(".titre");
const titreAnimal = document.createElement("h1");
titreAnimal.innerText = "Les animaux"
sectionAnimal.appendChild(titreAnimal);


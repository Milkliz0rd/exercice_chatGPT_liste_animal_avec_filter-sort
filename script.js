const sectionAnimal = document.querySelector(".titre");
console.log(sectionAnimal);

const titreAnimal = document.createElement("h1");
console.log(titreAnimal);
titreAnimal.innerText = "Les animaux"
sectionAnimal.appendChild(titreAnimal);
//ajout du titre en JS pour m'exercer et voir si JS était bien relié

const sectionAnimal = document.querySelector(".titre");
const titreAnimal = document.createElement("h1");
titreAnimal.innerText = "Les animaux"
sectionAnimal.appendChild(titreAnimal);

//ajout de la liste des animaux
let animauxTableau = [];
const animalInput = document.querySelector("#animal-input");
const animalAdd = document.querySelector("#add-animal");
const animalList = document.querySelector("#animal-list")

function ajouterAnimal () {
    const valeur = animalInput.value.trim();
    if (valeur !== "") {
        animauxTableau.push(valeur);
        animalInput.value = "";
    }else{
        alert("veuillez entrer un nom d'animal")
    }
    
}

animalAdd.addEventListener("click", ajouterAnimal);
console.log(animauxTableau);


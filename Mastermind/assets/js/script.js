// Création de l'historique vide
let divHistorique = document.getElementById("historique");
for(let j=12;j>0;j--){
    let divClassHisto = document.createElement("div");
    divClassHisto.setAttribute("class", "histo "+j);
    let divClassRonds = document.createElement("div");
    divClassRonds.setAttribute("class", "ronds");
    divHistorique.appendChild(divClassHisto);
    divClassHisto.appendChild(divClassRonds);
    for (let i=0;i<4;i++){
        let divClassRond = document.createElement("div");
        divClassRond.setAttribute("class", "rond "+i+" blanc");
        divClassRonds.appendChild(divClassRond);
    }
    let divClassPetitRonds = document.createElement("div");
    divClassPetitRonds.setAttribute("class", "petit-ronds");
    divClassHisto.appendChild(divClassPetitRonds);
    for (let i=0;i<4;i++){
        let divClassPetitRond = document.createElement("div");
        divClassPetitRond.setAttribute("class", "petit-rond "+i+" blanc");
        divClassPetitRonds.appendChild(divClassPetitRond);
    }
}
// creation des events listener
// couleur
let divColor = document.getElementById("couleur");
let color = divColor.getElementsByClassName("rond");
let selectColor = "rond blanc";
for (let i=0; i< color.length;i++){
    color[i].addEventListener("click", function(){ selectColor = (color[i].className);}); 
}
// estimation
let divEstimation = document.getElementById("estimation");
let colorEstimation = divEstimation.getElementsByClassName("rond");
for (let i=0; i< colorEstimation.length;i++){
    colorEstimation[i].addEventListener("click", function(){ colorEstimation[i].className = selectColor}); 
}
// valider
let buttonValidation = document.getElementById("valider");
buttonValidation.addEventListener("click", function(){check();});
// fonction random + tirage des 4 boules parmis les 6 couleurs
function numAlea(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
// let's play to check
let rondColor=[];
let essaie=0;
function check(){
    for (let i=0; i< colorEstimation.length;i++){
        if (colorEstimation[i].className != "rond blanc"){
            rondColor[i]=1;
        }
    }
    if ((rondColor[0]==1)&&(rondColor[1]==1)&&(rondColor[2]==1)&&(rondColor[3]==1)){
        for (let i=0; i< colorEstimation.length;i++){
            colorEstimation[i].className = "rond blanc";
            essaie++;
            rondColor=[];
        }
    }
}
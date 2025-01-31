var compteur = 0;
var compteur2 = 0;

var Madiv= document.getElementById("Methode2");
Madiv.addEventListener("click", UneProcedureQuiChangeLeText);

var Madiv =document.getElementById("Methode3");
Madiv.addEventListener("mouseover", UneProcedureQuiSurvole);

var Madiv = document.getElementById("Methode4");
Madiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "vous avez appuyé sur " + evenement.key;
}

function UneProcedureQuiChangeLeText(evenement) {
    compteur++;
    evenement.target.innerHTML = "vous avez cliqué " + compteur + " fois";
}

function UneProcedureQuiSurvole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "vous m'avez survolé " + compteur2 + " fois";
}
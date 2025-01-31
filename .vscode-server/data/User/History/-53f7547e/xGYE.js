var compteur = 0;
var compteur2 = 0;

var divClick = document.getElementById("Methode2");
var divSur = document.getElementById("Methode3");
var divTou = document.getElementById("Methode4");

divClick.addEventListener("click", UneProcedureQuiChangeLeText);
divHover.addEventListener("mouseover", UneProcedureQuiSurvole);
divKeydown.addEventListener("keydown", UneProcedureQuiEcrit);

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

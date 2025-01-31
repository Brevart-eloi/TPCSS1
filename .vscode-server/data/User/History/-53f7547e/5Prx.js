var compteur = 0;
var compteur2 = 0;

var MaDiv = document.getElementById("Methode2");
MaDiv.addEventListener("click", UneProcedureQuiChangeLetext);

MaDiv = document.getElementById("Methode3");
MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole);

MaDiv = document.getElementById("Methode4");
MaDiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
    evenement.target.innerHTML = "On a appuyé sur : " + evenement.key;
}

function UneProcedureQuiChangeLetext(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus " + compteur + " fois";
}

function UneProcedureQuiSurvole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé " + compteur2 + " fois";
}

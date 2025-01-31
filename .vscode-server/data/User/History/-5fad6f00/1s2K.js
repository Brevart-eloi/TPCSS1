var compteur = 0;
var compteur2 = 0;

var Madiv= document.getElementById("Methode2");
Madiv.addEventListener("click", UneProcedureQuiChangeLeText);

function UneProcedureQuiChangeLeText(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus " +compteur+" fois";
}

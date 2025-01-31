var compteur = 0;
var Madiv = document.getElementById("Methode2");
Madiv.addEventListener("click", UneProcedureQuiChangeLeText);

function UneProcedureQuiChangeLeText(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus " + compteur + " fois";
    fetch('../exo1.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur HTTP : ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Affiche le contenu du fichier JSON dans la console
            // Vous pouvez également afficher le contenu dans la page, par exemple :
            // document.getElementById("contenuJSON").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Une erreur est survenue lors de la récupération du fichier JSON :', error);
        });
}

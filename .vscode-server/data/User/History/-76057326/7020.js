// Demande à l'utilisateur d'entrer une valeur
var mavarint = parseInt(prompt('Entrez une valeur'), 10);

// Initialiser la variable pour stocker le résultat
var resultat = 0;

// Fonction pour additionner deux valeurs
function addition(val1, val2) {
    return val1 + val2;
}

// Boucle pour additionner les valeurs de 1 à mavarint
for (let i = 1; i <= mavarint; i++) {
    resultat = addition(resultat, i);
}

// Affiche le résultat
alert('La somme des nombres de 1 à ' + mavarint + ' est : ' + resultat);

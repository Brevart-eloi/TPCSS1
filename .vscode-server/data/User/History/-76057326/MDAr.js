function calculSomme(parametre) {
    var mavarint = prompt('entrez une valeur') ;
    let resultat = 0;
    for (let i = 1; i < parametre; i++) {
        resultat += i;
    }

    alert(resultat);
}

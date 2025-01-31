function calculSomme() {
    var mavarint = prompt('entrez une valeur') ;
    let resultat = mavarint;
    for (let i = 1; i < resultat; i++) {
        resultat += i;
    }

    alert(resultat);
}

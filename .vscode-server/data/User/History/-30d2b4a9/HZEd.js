function envoyerUntruc() {
    let valeurDeMonChamp = document.getElementById("leNom");
    fetch("http://192.168.65.179:8080/AddMedecin",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: {"nom": valeurDeMonChamp.value}
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })  
}

var monBouton = document.getElementById("lebuton"); 
monBouton.addEventListener("click", envoyerUntruc);

var ladiveMagique = document.getElementById("idListMedecin");

fetch('http://192.168.64.209:8080/Route1', {
    headers: {
        Accept: 'application/json'
    }
}).then(response => {
    if (response.ok) {
        return response.json()
    } else {
        throw new Error('Erreur serveur', { cause: response })
    }
}).then(result => {
    console.log('La liste des articles : ', result)
    ladiveMagique.innerHTML = JSON.stringify(result);
}).catch(error => {
    console.error('Une erreur est survenue', error)
})

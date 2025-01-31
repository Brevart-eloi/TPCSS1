var monBouton = document.getElementById("idListMedecin");
function envoyeruntruc() {
    let 
}
monBouton.addEventListener("click", envoyeruntruc);
var ladiveMagique = document.getElementById('idListMedecin');
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
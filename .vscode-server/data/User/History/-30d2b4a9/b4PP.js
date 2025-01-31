const express = require('express');

const mysql = require('mysql');

const cors = require('cors');

const app = express();





app.use(express.json()); //obligatoire pour récupérer et parser du json qui arrive du back

app.use(cors()); // on applique les poliques de sécurité cors



const port = 8080;



app.listen(

    port,

    () => { console.log('Mon server est démaré sur le port N°' + port); }

);



const bddConnection = mysql.createConnection(

    {
        host: "192.168.65.219", // ip du server mariadb

        database: "TD3", //nom de la base de donnée dans phpmyadmin

        user: "site1", //user privilège dans phpmyadmin

        password: "site1" //mdp privilège dans phpmyadmin

    }

);



bddConnection.connect(

    function(err) {
        if (err) throw err;
        console.log("Julien Code est Connecté à la base Yo !");
    }

);



app.get(

    '/Route1',

    (req, res) => {

        bddConnection.query("SELECT * FROM Medecin", (err, results) => {

            if (err) {

                return res.status(500).send({ error: err.message });

            }

            res.json(results);

        });

    }

)



app.post(

    '/AddMedecin',

    (req, res) => {

        const query = `INSERT INTO Medecin (nom, prenom) VALUES (?, ?)`;

        bddConnection.query(query, [req.body.nom, req.body.nom]);

        res.send("Data inserted successfully");

    }

);



Cote client site HTML JS




function envoyerUntruc() {

    let valeurDeMonChamp = document.getElementById("leNom");

    fetch("http://192.168.64.209:8080/AddMedecin",

        {

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

            method: "POST",

            body: { "nom": valeurDeMonChamp.value }

        })

    .then(function(res) { console.log(res) })

    .catch(function(res) { console.log(res) })

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
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
        host: "192.168.64.209", // ip du server mariadb

        database: "TD3baseMedecin_importer", //nom de la base de donnée dans phpmyadmin

        user: "site1", //user privilège dans phpmyadmin

        password: "site1" //mdp privilège dans phpmyadmin

    }

);



bddConnection.connect(

    function(err) {
        if (err) throw err;
        console.log("Eloi le goat est Connecté à la base Yo !");
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
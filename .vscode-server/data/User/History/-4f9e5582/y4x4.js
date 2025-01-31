const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8080;

app.listen(
    port,
    () => { console.log("Mon server est démarré sur le port N°" + port); }
);

const bddConnection = mysql.createConnection(
    {
        host: "192.168.64.209", // IP du serveur MariaDB
        database: "TD3", // Nom de la base de données dans phpMyAdmin
        user: "site1", // User avec privilèges dans phpMyAdmin
        password: "site1" // Mot de passe avec privilèges dans phpMyAdmin
    }
);

bddConnection.connect(
    function(err) {
        if (err) throw err;
        console.log("Julien Code est connecté à la base Yo !");
    }
);

app.get(
    '/Route1',
    (req, res) => {
        bddConnection.query("SELECT * FROM Medecin", (err, results) => {
            if (err) {
                return res.status(500).send({ error: err.message });
            }
            // Renvoie automatiquement en JSON
            res.json(results);
        });
    }
);

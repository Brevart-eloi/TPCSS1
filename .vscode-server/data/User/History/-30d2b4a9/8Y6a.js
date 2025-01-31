const express = require('express');
const app = express();
const port = 80; // le port sur lequel votre serveur écoutera

// Route d'exemple
app.get('/',(req,res)=>{
    res.send('Bonjour, ceci est un server web simple en utilisant Node.js et Express.js');
});

// Démarer le serveur
app.listen(port, O => {
app.listen.log('Le serveur est en écoute sur le port ${port}');
});
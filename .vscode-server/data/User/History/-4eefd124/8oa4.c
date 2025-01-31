const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Dessiner un rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(20, 20, 150, 100);

// Ajouter du texte
ctx.font = '30px Arial';
ctx.fillText('Hello, canvas!', 50, 50);
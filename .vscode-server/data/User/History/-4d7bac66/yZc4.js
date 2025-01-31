function ModifText(letext) {
    alert("je vais modifier la div")
}
ModifText();
const div = document.getElementByName('lesdivs');
div.textContent = 'Hello';
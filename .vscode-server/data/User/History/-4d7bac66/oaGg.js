function ModifText(letext) {
    alert("Je vais modifier les divs");

    const divs = document.getElementsByName('lesdivs');
    
    divs.forEach(div => {
        div.textContent = letext;
    });
}
ModifText('Hello');

const setup = () => {
    // registeer click event listener 'voegToe' bij #btnAdd
    document.querySelector('#btnAdd').addEventListener("click", voegToe);

    // registreer click event listener 'wisAlles' bij #btnClear
    document.querySelector('#btnClear').addEventListener("click", wisAlles);

    // registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients
    const ulIngredienten = document.getElementById('lstIngredients');
    const liElements = ulIngredienten.querySelectorAll('li');
    liElements.forEach(el => el.addEventListener("click", maakBelangrijk));
}

const voegToe = () => {
    const tekst = document.getElementById('txtInput').value;
    document.getElementById('lstIngredients').insertAdjacentHTML('beforeend', `<li>${tekst}</li>`);
    const ulIngredienten = document.getElementById('lstIngredients');
    const laatsteLiElement = ulIngredienten.querySelector('li:last-of-type');
    laatsteLiElement.addEventListener("click", maakBelangrijk);    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
}

const wisAlles = () => {
    document.querySelector('#lstIngredients').innerHTML = '';
    // Wis alle ingredienten
    // Je kunt dit doen door alle de .innerHTML van #lstIngredients een lege string in te stellen
}

const maakBelangrijk = (event) => {
    event.target.classList.toggle('belangrijk');
    // Geef het geklikte element de CSS class 'belangrijk'
}

window.addEventListener('load', setup);




















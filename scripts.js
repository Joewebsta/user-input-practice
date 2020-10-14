let h1Text = document.querySelector('h1');

let textInput = document.querySelector('.text');
let propertyInput = document.querySelector('#property');
let valueInput = document.querySelector('#value');

let changeTextBtn = document.querySelector('.change-text');
let changeStyleBtn = document.querySelector('.change-style');


changeTextBtn.addEventListener('click', changeText);

function changeText() {
  h1Text.innerText = textInput.value;
}
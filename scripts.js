let h1Text = document.querySelector('h1');
let box = document.querySelector('.box');

let textInput = document.querySelector('.text');
let propertyInput = document.querySelector('#property');
let valueInput = document.querySelector('#value');

let changeTextBtn = document.querySelector('.change-text');
let changeStyleBtn = document.querySelector('.change-style');

function changeText() {
  h1Text.innerText = textInput.value;
}

function changeStyle() {
  box.style.cssText += `${propertyInput.value}: ${valueInput.value}`;  
}

changeTextBtn.addEventListener('click', changeText);
changeStyleBtn.addEventListener('click', changeStyle);
let reset = document.querySelector('.reset');

let button1 = document.querySelector(".button1");
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');

let buttonM1 = document.querySelector('.buttonM1');
let buttonM2 = document.querySelector('.buttonM2');

let buttonM3 = document.querySelector('.buttonM3');
let counterText = document.querySelector('.counter');
let counter = 0;

reset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});

button1.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

button2.addEventListener('click', function() {
    counter = counter + 2;
    counterText.innerText = counter;
});

button3.addEventListener('click', function() {
    counter = counter + 3;
    counterText.innerText = counter;
});


buttonM1.addEventListener('click', function() {
    counter = counter - 1;
    counterText.innerText = counter;
});

buttonM2.addEventListener('click', function() {
    counter = counter - 2;
    counterText.innerText = counter;
});

buttonM3.addEventListener('click', function() {
    counter = counter - 3;
    counterText.innerText = counter;
});

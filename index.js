let button1 = document.querySelector(".button1");
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3')
let counterText = document.querySelector('.counter');
let counter = 0;

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
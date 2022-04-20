let result = document.getElementById('result');
let counter = 0;
result.innerHTML = counter;

function addOne() {
    counter++;
    result.innerHTML = counter;
}

function subOne() {
    counter--;
    result.innerHTML = counter;
}

function addTen() {
    counter += 10;
    result.innerHTML = counter;
}

function subTen() {
    counter -= 10;
    result.innerHTML = counter;
}

function addHundred() {
    counter += 100;
    result.innerHTML = counter;
}

function subHundred() {
    counter -= 100;
    result.innerHTML = counter;
}

function reset() {
    counter = 0;
    result.innerHTML = counter;
}

function double() {
    counter *= 2;
    result.innerHTML = counter;
}
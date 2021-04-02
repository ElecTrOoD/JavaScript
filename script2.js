'use strict';

let basket = [
    ['Яблоки', 50, 3],
    ['Груши', 65, 1],
    ['Персики', 85, 2],
    ['Бананы', 55, 1]
]

function calcFullPrice(accumulator, item) {
    return accumulator + item[1] * item[2];
}

function countBasketPrice(arr) {
    return arr.reduce(calcFullPrice, 0);
}

console.log(countBasketPrice(basket))
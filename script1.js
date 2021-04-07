'use strict';

function conversion(num) {
    return {
        'единицы': num % 10,
        'десятки': Math.floor(num / 10 % 10),
        'сотни': Math.floor(num / 100)
    };

}

function numberToObject(num) {
    if(typeof num != 'number' || num < 0 || num > 999) {
        console.log('Введите число от 0 до 999.');
        return {};
    } else {
        return conversion(num);
    }
}

console.log(numberToObject(122))
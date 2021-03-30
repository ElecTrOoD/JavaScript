function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b == 0) return 'На ноль делить нельзя';
    return a / b;
};

function mult() {
    return a * b;
}

function mathOperation(arg1, arg2, operation) {
    operation = operation.toLowerCase();
    switch (operation) {
        case 'сложение':
            return add(arg1, arg2);

        case 'вычитание':
            return sub(arg1, arg2);

        case 'умножение':
            return mult(arg1, arg2);

        case 'деление':
            return div(arg1, arg2);

        default:
            return 'Неверные вводные данные.';
    }
}

let varArray = prompt('Введите 2 целых числа и операцию (сложение, вычитание, деление, умножение) через пробел');
varArray = varArray.split(' ');
let a = parseInt(varArray[0]);
let b = parseInt(varArray[1]);
let opr = (varArray[2]);

alert(mathOperation(a, b, opr));
function power(val, pow) {
    if (pow == 0) return 1;
    else if (pow == 1) return val;
    else return val * power(val, pow - 1);
}

let a = prompt('Введите число:');
let b = prompt('Введите степень:');
alert(power(a, b));
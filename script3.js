let varArray = prompt('Введите 2 целых числа через пробел');
varArray = varArray.split(' ');
let a = parseInt(varArray[0]);
let b = parseInt(varArray[1]);

if (a >= 0 && b >= 0) alert(`Оба числа положительные, их разность: ${a - b}`);
else if (a < 0 && b < 0) alert(`Оба числа отрицательные, их произведение: ${a * b}`);
else alert(`Числа имеют разные знаки, их сумма: ${a + b}`);
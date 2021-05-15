function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b == 0) return alert('На ноль делить нельзя');
    return a / b;
}

function mult() {
    return a * b;
}

let a = 12;
let b = 7;
alert(add(a, b));
alert(sub(a, b));
alert(div(a, b));
alert(mult(a, b));

b = 0;
alert(div(a, b));
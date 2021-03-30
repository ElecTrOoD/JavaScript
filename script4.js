let a = prompt('Введите целое число от 0 до 15')
let string = ''
switch (a) {
    case '0':
        string += '0 ';
    case '1':
        string += '1 ';
    case '2':
        string += '2 ';
    case '3':
        string += '3 ';
    case '4':
        string += '4 ';
    case '5':
        string += '5 ';
    case '6':
        string += '6 ';
    case '7':
        string += '7 ';
    case '8':
        string += '8 ';
    case '9':
        string += '9 ';
    case '10':
        string += '10 ';
    case '11':
        string += '11 ';
    case '12':
        string += '12 ';
    case '13':
        string += '13 ';
    case '14':
        string += '14 ';
    case '15':
        alert(string += '15');
        break;;
    default:
        alert('Неверное число.')
        break;
}
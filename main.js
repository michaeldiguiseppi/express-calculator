function add (num1, num2) {
    return +num1 + +num2;
}

function sub (num1, num2) {
    return +num1 - +num2;
}

function mult (num1, num2) {
    return +num1 * +num2;
}

function div (num1, num2) {
    return +num1 / +num2;
}

function pow (num1, num2) {
    return Math.pow(+num1, +num2);
}



module.exports = {
    add: add,
    sub: sub,
    mult: mult,
    div: div,
    pow: pow
}
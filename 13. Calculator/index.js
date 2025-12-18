/*
// initially user input by default string a thake
var n1 = prompt("Enter firstNumber: ");
var n2 = prompt("Enter secondNumber: ");

// string to int
// n1 = parseInt(n1, 10);
// n2 = parseInt(n2, 10);

// string to Number
n1 = Number(n1);
n2 = Number(n2);

var sum, sub;
sum = n1 + n2;
sub = n1 - n2;
document.write("SUM = "+ sum + '<br>' + "SUB = " + sub);
*/

// task
var n1 = prompt("Enter firstNumber: ");
var n2 = prompt("Enter secondNumber: ");

n1 = Number(n1);
n2 = Number(n2);

var sum = n1 + n2, sub = n1 - n2, mul = n1 * n2, div = n1 / n2;
document.write("SUM = " + sum + '<br>');
document.write("SUB = " + sub + '<br>');
document.write("MUL = " + mul + '<br>');
document.write("DIV = " + div);
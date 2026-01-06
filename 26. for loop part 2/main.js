// s + .... + e
// var s = Number(prompt('Enter starting number: '));
// var e = Number(prompt('Enter ending number: '));
// var sum = 0;
// for (var i = s; i <= e; i++) {
//     sum += i;
// }
// document.write(' '+ sum);



// find x time 2 number sum
var x = Number(prompt('Enter x: '));

for (var i = 0; i <= x - 1; i++) {
    var n1 = Number(prompt('Enter first number: '));
    var n2 = Number(prompt('Enter second number: '));
    var sum = 0;
    sum = n1 + n2;
    document.write(' ' + sum);
}

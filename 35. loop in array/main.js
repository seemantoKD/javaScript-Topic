// array declare with initialize
var arr = [10, 20, 30, 40, 50];

// array user input using loop
var arr = new Array();
// user input
for (var i = 0; i < 5; i++) {
    arr[i] = Number(prompt("Enter element" + i + ': '));
}

// print array using loop
for (var i = 0; i < arr.length; i++) {
    document.write(' ' + arr[i]);
}

// total sum of array element using loop
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// document.write(' ' + sum);
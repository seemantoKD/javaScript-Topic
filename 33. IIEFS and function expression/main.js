// IIFE -> Immediately Invoked Function Expression

// // create function
// function display(){
//     document.write("Hello");
// }

// // function call
// display();

// immediate function calling
// (function display(){
//     document.write("Hello");
// })();

// imidiate function create and pass multiple parameter
// (function display(message, num){
//     document.write(`${message} <br> ${num}`);
// })("hello", "1");

// function expression creating
// var fun = function displayMessage(){
//     document.write('Hi i am message');
// }
// fun();


// function expression with parameter
// var fun = function displayMessage(msg) {
//     document.write(msg);
// }
// fun('Function expression with parameter');


// create an IIFEs that print sum of two number
(function sum (a,b){
    document.write(a + b);
})(5,6);
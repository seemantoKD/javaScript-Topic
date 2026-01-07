// syntax: fuction functionName (){
//     function body
// }

// create function
// function square(){
//     var x = 5;
//     x = Number(x);
//     document.write(`${x * x} <br>`);
// }

// // calling a function
// square();
// square();


// function with 
// function area (b, h){
//     var ans = b * h;
//     document.write(`${ans}<br>`);
//     // document.write(`${ans}<br>`);
// }


// var b = 5;
// var h = 6;
// b = Number(b);
// h = Number(h);
// area(b,h);


// value return from a function
// function area (b, h){
//     var ans = b * h;
//     return ans;
//     // document.write(`${ans}<br>`);
// }

// var b = 5;
// var h = 6;
// b = Number(b);
// h = Number(h);
// var ans = area(b,h);
// document.write(`${ans}<br>`);


// multiple function
function area (b, h){
    var ans = b * h;
    return ans;
}

function add(a,b){
    return a + b;
}

var b = 5;
var h = 6;
b = Number(b);
h = Number(h);
var mul = area(b,h);
var addition = add(5,6);
document.write(`${mul}<br>${addition}<br>`);
// default parameter -> jodi parameter na pass kora hoy
// tahole default ekta parameter set kore deya jay.

"use strict"
// default parameter
/*
function message(text = 'This is default parameter'){
    console.log(text);
}
// message('Parameter passes');
message(); // parameter pass kora hoy ni, so default ta set hobe
*/

// rest parameter -> onekgula parameter er collection
// syntax ...parameterName
function printNumbers(x,y,...z){
    console.log(`X = ${x}\nY = ${y}\nRest Parameter -> z = ${z}`);
}
printNumbers(10, 20,30,40,50,60);
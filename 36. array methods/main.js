// library function/methods of array
/*
    1. push
    2. pop
    3. concat
    4. shift -> arrayr prothom theke element remove
    5. unshift -> arrayr shurute element add kore
    6. splice -> ith position a element add and remove kora jay
    7. sort
    8. reverse
    9. slice -> array theke element slice kore then new arekta array return kore
*/
var names = ["Seemanto", "Srinjoy", "Shanto", "Pradip", "Ashim"];
console.log(names);

// // shift method
// // console.log(names.length);
// names.shift();
// console.log(names);
// // console.log(names.length);

// // unshift method
// // console.log(names.length);
// names.unshift("Srijonti");
// console.log(names);
// // console.log(names.length);

// splice method
// element add using splice
// names.splice(2,2,"Ovi","Suhel"); syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// console.log(names);
// removing using splice
// names.splice(1,2); syntax: startIndex, endIndex
// console.log(names);

// slice method
// var returningArray = names.slice(1);
// console.log(returningArray);

// sort method
// names.sort();
// console.log(names);

// reverse method
// names.reverse();
// console.log(names);
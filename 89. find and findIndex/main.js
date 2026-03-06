// find(callback, value) return the value of the first element that pass certain condition
let numbers = [6, 55, 14, 5, 78];
let firstEvenNumber = numbers.find(x => x %2 == 0);
// console.log(firstEvenNumber);

// findIndex(callback, value) return the index of the first element that pass certain condition
let firstOddIndex = numbers.findIndex(function(x){
    return x & 1;
});
// console.log(firstOddIndex);


// find and findIndex with object
const students = [
    {
        id: 93,
        cgpa: 3.9
    },

    {
        id: 94,
        cgpa: 2.5
    },

    {
        id: 88,
        cgpa: 3.3
    },

    {
        id: 54,
        cgpa: 4
    }
]

let greaterCg = students.find(function(x){
    return x.cgpa > 3.5;
});
console.log(greaterCg);



/*
    ~ summary:
        - find with array
        - findIndex with array
        - find and findIndex with object
*/
// spread operator (...)
function addNumber(x, y, z) {
    return x + y + z;
}

let numbers = [1, 2, 3];
// console.log(addNumber(numbers[0], numbers[1], numbers[2]));
// console.log(addNumber(...numbers));

// let newArray = [5,6,...numbers]
let newArray = [4, 5, 6, 7]
// console.log(newArray)

// concat two array using spread operator
// let concatArray = numbers.concat(newArray)
// console.log(concatArray)
let concatArray = [...numbers, ...newArray]
// console.log(concatArray)

// spread and object
let p1 = {
    name: 'seemanto',
    age: 30
}

let p2 = {
    nationality: 'Bangladeshi',
    occupation: 'student'
}

let p = { ...p1, ...p2 }
// console.log(p)


/*
    ~ learning:
        - how to pass parameter using spread operator
        - how to concat array using spread operator
        - how to concat object using spread operator
        - spread operator vs rest parameter
            # spread operator jekhane iccha sekhane
                use kora jay but rest ekdom last er parameter
                a use korte hoy.
*/
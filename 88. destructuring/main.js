// destructuring -
// i. array destructuring and ii. object destructuring

// array destructure

let numbers = [10,20,30,40,50]
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// destructure
// let [num1, num2, num3, num4, num5] = numbers
let [...z] = numbers
// console.log(num1) // numbers[0]
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)
// console.log(z)

// swap variables using destructure
let a = 10, b = 20;
[a,b] = [b,a] // swapping
// console.log(`A = ${a}, B = ${b}`)

// object destructure
// const studentInfo = {
//     id: 93,
//     fullName: 'Seemanto Kumar Dash',
//     cgpa: 3.75
// }

// console.log(`Name: ${studentInfo.fullName}\nID: ${studentInfo.id}\nCGPA: ${studentInfo.cgpa}`)
// const {id, fullName} = studentInfo // destructure
// console.log(`ID: ${id}\nName: ${fullName}`)


// nested object destructure
// const studentInfo = {
//     id: 93,
//     fullName: 'Seemanto Kumar Dash',
//     cgpa: 3.75,
//     languages: {
//         native: 'Bangla',
//         nobe: 'English'
//     }
// }

// const {fullName, languages} = studentInfo
// console.log(fullName)
// console.log(languages.native)

// destructuring function parameters
const studentInfo = ({id, fullName}) => {
    // let{id, fullName} = students // destructuring
    console.log(`Name: ${fullName}\nID: ${id}`)
}

const students = {
    id: 93,
    fullName: 'seemanto'
}
studentInfo(students)



/*
    ~ learning:
        - array destructuring
        - swapping
        - object destructuring
        - nested object destructuring
        - function parameters destructuring
*/
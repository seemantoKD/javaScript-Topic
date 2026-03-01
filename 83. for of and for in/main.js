// for...of

// const names = ['seemanto', 'pradip', 'shanto']
// for(let name of names){
//     console.log(name)
// }

// for...in (object iterator)

let students = {
    // key: value/ property: value
    name: 'Seemanto',
    id: 93,
    cgpa: 'n/a'
}

for(let key in students){
    // console.log(key) // key/property
    // console.log(students[key]) // value
    // console.log(`${key}: ${students[key]}`) // key value
}


/*
    ~ learning:
        - for of (normal case)
        - for in (case when related with object)
*/
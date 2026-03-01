// arrow with map and filter

let students = [
    {
        id: 93,
        name: 'Seemanto',
        cgpa: 3.88
    },

    {
        id: 94,
        name: 'Topon',
        cgpa: 3.00
    },

    {
        id: 88,
        name: 'Saber',
        cgpa: 3.78
    }, 

    {
        id: 54,
        name: 'Tanvir',
        cgpa: 3.49
    }
]

// console.log(students)
const studentNames = () => {
    return students.filter(function(x){
        return x.cgpa > 3
    }).map(function(y){
        return y.name
    })
}
console.log(studentNames())
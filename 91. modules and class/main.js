// export

// import
import {text, setText} from './myModule.js'
// console.log(text);
setText('Good bye from ES6');
// console.log(text);

// name change kore access
// import {text as message} from './myModule.js'

// class
class Student{
    // constructor
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    // set
    set studentName(name){
        this.name = name;
    }

    // get 
    get studentInfo(){
        return this.id + '\n' + this.name;
    }
}

// object
let s1 = new Student(93, 'Seemanto');
// console.log(s1);

// set
s1.studentName = 'Ja mon chay';
// console.log(s1);

// get
console.log(s1.studentInfo);
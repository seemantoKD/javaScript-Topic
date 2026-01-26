// adding constructor
function Student(name, age, cgpa, lan){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lan = lan;

    // adding function
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lan);
    }
}

// object declare with initialize
var student1 = new Student("Seemanto", 21, 3.92, ["bangla","english"]);
var student2 = new Student("Shuvro", 22, 3.00, ["bangla","english"]);

// printing
student1.display();
student2.display();
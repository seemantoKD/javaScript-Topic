/*
    // downwards - children
    var studentsList = document.querySelector(".students-list"); // parent select
    // var studentA = studentsList.querySelector(".student-a"); // first child select
    // studentList.children diye o child kuja jay
    var studentA = studentsList.children[0]; // first child select
*/

/*
    // upwards - parent
    var studentB = document.querySelectorAll("li")[1];
    var parentOfB = studentB.parentElement; // select parent
*/

// sideways - sibling
var studentsList = document.querySelector(".students-list"); // parent select
var studentA = studentsList.children[0]; // first child
var studentB = studentA.nextElementSibling; // second child
var studentC = studentB.nextElementSibling; // third child
studentA = studentB.previousElementSibling; // first child


/*
    summary:
        1. downward traversing
        2. upwards traversing
        3. sideways traversing
*/
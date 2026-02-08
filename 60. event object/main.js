// // var input = document.querySelector("input");
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandler);

// function changeHandler(event){
//     // console.log(event);

//     // how to know event type?
//     // console.log(event.type);

//     // how to see event target and internal target
//     // console.log(event.target);
//     // console.log(event.target.className);
//     // console.log(event.target.id);
//     // console.log(event.target.value);
// }


// change event listener with checkbox
// const programs = document.querySelectorAll("input[name=program]");
// // console.log(programs);

// // nodeList to array
// Array.from(programs).map((program) => {
//     program.addEventListener('change', programHandler)
// })

// function programHandler(event){
//     if(event.target.checked){
//         console.log(event.target.value);
//     }
// }


// change event listener with select tag
const department = document.getElementById('department');
// console.log(department);

department.addEventListener('change', handleDepartment);

function handleDepartment(event){
    console.log(event.target.value);
}


/*
    summary:
        one things with three element
            ~ change event
                with:
                    i. input
                    ii. checkbox
                    iii. select
*/
// const div = document.querySelector("div");
// console.log(div);

// div.addEventListener('click', function(event){
//     // console.log('clicked');

//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.target.id);
//     // console.log(event.target.className);
//     // console.log(event.target.innerHTML); // element er vitore r kun kun element ache ta dekha
//     // console.log(event.target.textContent);
//     // console.log(event.target.innerText);

// });

// div.addEventListener("dblclick", function(){
//     console.log('Double clicked');
// });

// div.addEventListener("mousedown", function(){
//     console.log('Yes down'); // if press then execute
// });

// div.addEventListener("mouseup", function(){
//     console.log('Yes up'); // after press when mouse tule nibo then execute
// });

// div.addEventListener("mouseenter", function(){
//     console.log('Entered');
// });

// div.addEventListener("mouseleave", function(){
//     console.log('Leaved');
// });

// div.addEventListener("mousemove", function(event){
//     // console.log('Moved');

//     // window er sathe
//     // document.write('clientX = ' + event.clientX);
//     // document.write('clientY = ' + event.clientY);

//     // element er sathe
//     // document.write('offsetX = ' + event.offsetX);
//     // document.write('offsetY = ' + event.offsetY);
// });

// div.addEventListener("mouseover", function(){
//     console.log('Overed');
// });


// listener with multiple btn
const buttons = document.querySelectorAll('.btn');
// console.log(buttons);

// nodeList to array
// listener with multiple button
Array.from(buttons).map((button) => {
    button.addEventListener('click', function(event){
        // console.log(event.target.innerText);
        console.log(event.target.textContent);
    });
});
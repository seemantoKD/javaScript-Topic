const textArea = document.querySelector('textarea');

textArea.addEventListener("keydown", function(event){
    // console.log('keydown');
    // if(event.repeat){
    //     console.log('Donot repeat');
    // }
});

textArea.addEventListener("keyup", function(event){
    // console.log('keyup');
    // console.log(event.key);
    // console.log(event.keyCode); // ascii code
    // console.log(event.code);
    // console.log(event.shiftKey);

    // if(event.shiftKey){
    //     console.log('shift + ' + event.key);
    // }
});

// textArea.addEventListener("keypress", function(){
//     console.log('keypress');
// });
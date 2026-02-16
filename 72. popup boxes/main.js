// console.log(window);

// alert box
// alert('error here');

// confirm box
// confirm('Are You Sure?');
// function deleteSomething(){
//     let value = confirm('Do You Want To Delete?');
//     if(value){
//         document.write('Item deleted');
//     }
//     else{
//         document.write('Item not delete');
//     }
// }

// // function call
// deleteSomething();

// prompt box
function welcomeMsg(){
    let h1 = document.createElement('h1');
    let text;
    // h1.innerText = 'This is Heading 1';
    // document.body.append(h1);

    let name = prompt('Enter Your Name: ');
    if(name == null || name == ''){
        text = 'no name found';
    }
    else{
        text = name;
    }
    h1.append(text);
    document.body.append(h1);
}

// call the function
welcomeMsg();
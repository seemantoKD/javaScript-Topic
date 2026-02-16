// setTimeout(() => {
//     console.log('hi');
// }, 2000);

// setTimeout(display, 2000);

// function display(){
//     console.log('display function');
// }

const saveButton = document.querySelector('.save-button');
const message = document.querySelector('.message');

// saveButton.addEventListener('click', saveUser);

// function saveUser(){
//     message.innerText = 'User registration succesful';
//     setTimeout(()=>{
//         message.innerText = '';
//     },3000)
// }


// setInterval method
saveButton.addEventListener('click', displayCount);

function displayCount(){
    let cnt = 1;
    message.innerText = cnt;

    setInterval(() => {
        cnt++;
        message.innerText = cnt;
    }, 1000);
}
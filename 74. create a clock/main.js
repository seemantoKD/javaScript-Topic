const saveButton = document.querySelector('.save-button');
const message = document.querySelector('.message');

saveButton.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();

    // format time
    mins = formatTime(mins);
    seconds = formatTime(seconds);
    
    let time = hours + ':' + mins + ':' + seconds;
    // console.log(time);

    message.innerText = time;

    setInterval(startClock, 1000);
}

function formatTime(value){
    if(value < 10){
        value = '0' + value;
    }
    return value;
}
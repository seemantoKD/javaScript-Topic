// user input
let inputNum = parseInt(prompt("Enter a number: "));

// random value between 1 to 6
let randomNum = Math.floor(Math.random() * 6 + 1);

// checking
if(inputNum == randomNum){
    console.log("Congoooo! You got it baibby-_-");
}
else{
    console.log(`Oppps! the random number: ${randomNum}`);
}
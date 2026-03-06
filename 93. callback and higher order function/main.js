// callback
/*
function square (x){
    console.log(`Square of ${x}: ${x*x}`);
}
// square(5);

// const y = square;
// y(6)

function higherOrderFunction(val, callback){
    callback(val);
}
higherOrderFunction(6, square) // square is a callback function
*/

/*
const taskOne = (callback) => {
    console.log('Task1');
    callback();
}

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log('Task2.data loading');
        callback();
    },3000);
}

const taskThree = () => {
    console.log('Task3');
}

// methods calling
taskOne(() => {
    taskTwo( () => {
        taskThree();
    });
});
*/

console.log('Hi')
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button is clicked')
})
console.log('Bye')


/*
    ~ learning:
        - ekti function arekti function ke recieve korle
            i. je function parameter a jabe seta callback function
            ii. je function reciever seta higherOrderFunction
        
        - we know that,
            asynchronous function sobar shese kaj kore,
            but user caile je smy khusi se smy parbe execute
            korate, callback function use kore.
*/
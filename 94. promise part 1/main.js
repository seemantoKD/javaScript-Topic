// promise
/*
    - how to create promise
    - how to use promise
    - how to run multiple promise - all()
    - race()
    - promise chaining
*/

console.log('Welcome')

// create promise -> pending, resolve, reject
// const promiseOne = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if (completedPromise) {
//         resolve('Completed Promise One Perfectly')
//     } else {
//         reject('You cannot bear the promise one')
//         // reject(new Error('You cannot bear the promise one'))
//     }
// })
// // console.log(promiseOne)

// // using promise
// promiseOne.
//     then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const promiseTwo = new Promise((resolve, reject) => {
//     resolve('Completed Promise Two')
// })

// // using promise 2
// promiseTwo.
//     then(res => {
//         console.log(res)
//     })

// multiple promise run at a time
// Promise.all([promiseOne, promiseTwo]).
// destructure
// Promise.all([promiseOne, promiseTwo]).
//     then(([res1, res2]) => {
//         console.log(res1)
//         console.log(res2)
//     })

// promise race()
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Completed Promise one')
    }, 2000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Completed Promise two')
    }, 1000)
});

Promise.race([promise1, promise2]).then((res) => {
    console.log(res)
})

console.log('End')

/*
    ~ note:
        - promise resolve hole then function call hoy
        - promise reject hole catch function call hoy
        - finally sobsmy call kora jay jodi kichu finally dekhate cay user taile
*/
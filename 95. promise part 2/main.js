// promise chaining
console.log('start')

const task1 = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 1 is Completed')
    })
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task 2 is Completed')
        }, 2000)
    })
}

const task3 = () => {
    return new Promise((resolve, reject) => {
        reject('Task 3 is not Completed')
    })
}

const task4 = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 4 is Completed')
    })
}

const task5 = () => {
    return new Promise((resolve, reject) => {
        resolve('Task 5 is Completed')
    })
}

task1().
    then((res1) => {
        console.log(res1)
    }).then(task2)
    .then((res2) => {
        console.log(res2)
    }).then(task3)
    .then((res3) => {
        console.log(res3)
    }).then(task4)
    .then((res4) => {
        console.log(res4)
    }).then(task5)
    .then((res5) => {
        console.log(res5)
    }).catch((err) => {
        console.log(err)
    });

console.log('end')


/*
    ~ learning:
        - promise chaining
        - then and catch
*/
// object literals
function studentInfo1 (name, age){
    return  {
        // name: name,
        // age: age
        name,
        age
    }
}

// console.log(studentInfo1('Seemanto Kumar Dash', 21))

let message = {
    /*
    functionName: function(){
        // function body
    }
    */

    // body: function(){
    //     return `Hi, I am object function`
    // }

    // shortcut -> functionName(){ // function body }
    // body(){
    //     return `Hi, I am object function`
    // }

    'body name'(){
        return `Hi, I am object function`
    }
}
// console.log(message.body())
// console.log(message['body name']())

/*
    ~ learning:
        - return object in function
            # duplicate handle (name: name, age: age)
        - object in function
            # how to declare function
            # shortcut for declaring function
            # functionName with space
        - how to call spaces function
*/
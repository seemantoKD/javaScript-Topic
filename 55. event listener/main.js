// document.querySelector("button").addEventListener("click", myFunction);

// function myFunction(){
//     alert("Hello");
// }


// using anonamous function
// document.querySelector("button").addEventListener("click", function(){
//     alert("Hello I am an anonymous function");
// });

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
    // alert("hi");
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function(){
    // alert("hi");
    myVar.classList.remove("my-style");
});


/*
    summary:
        # how to work event listener with javascript dom
*/
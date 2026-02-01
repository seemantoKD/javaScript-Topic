// var myButton = document.querySelectorAll(".btn")[0].addEventListener("click",function(){
//     var text = this.innerHTML; // tag/element er text ta ber kore ane
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });

// var myButton = document.querySelectorAll(".btn")[1].addEventListener("click",function(){
//     var text = this.innerHTML; // tag/element er text ta ber kore ane
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });

// var myButton = document.querySelectorAll(".btn")[2].addEventListener("click",function(){
//     var text = this.innerHTML; // tag/element er text ta ber kore ane
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });



var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {
    var myButton = document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML; // tag/element er text ta ber kore ane
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}

/*
    summary:
        # how to get text of html tag or element using this keyword
        # How to know how many elements are used in a document using .length
*/
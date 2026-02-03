/*
    var buttons = document.querySelectorAll(".btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var text = this.innerHTML.toLowerCase();
            playAnimation(text);
        });
    }

    document.addEventListener("keypress", function(event){
        var text = event.key;
        playAnimation(text);
    });

    function playAnimation(text){
        var selectedButton = document.querySelector("." + text);
        selectedButton.classList.add("anim");

        // for removing animation
        setTimeout(function(){
            selectedButton.classList.remove("anim");
        }, 1000);
    }
*/

var count = 0;
// target: j key te press korbo seta dekhabe paragraph a
document.querySelector("textarea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;

    // document.querySelector("p").innerHTML = "You have pressed " + text;
    document.querySelector("p").innerHTML = "You have pressed " + count + " character";
});
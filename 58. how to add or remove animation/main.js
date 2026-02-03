var buttons = document.querySelectorAll(".btn");
for (var i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", function () {
        var text = this.innerHTML.toLowerCase();
        playAnimation(text);
    });
}

function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    // for stoping animation
    setTimeout(function () {
        // nirdisto somoy por por animation off
        selectedButton.classList.remove("anim");
    }, 1000);
}


/*
    summary:
        1. setTimeout function
        2. how to add or remove animation
*/
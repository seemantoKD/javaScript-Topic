for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        // console.log(text);

        audioPlay(text);
    });
}

function audioPlay(text) {
    switch (text) {
        case "A":
            // how to play audio with java
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;

        case "B":
            // how to play audio with java
            var audio = new Audio("audio/b.mp3");
            audio.play();
            break;

        case "C":
            // how to play audio with java
            var audio = new Audio("audio/c.mp3");
            audio.play();
            break;
    }
}


/*
    summary:
        # how to add listener in javascript
        # how to play audio in javascript
*/
/*
    // How to replace getElement by querySelector
    // query selector replce getElementById
    document.getElementById("para").innerHTML = 'Please replace me by query selector';
    document.querySelector("#para").innerHTML = 'Replaced';

    // query selector replce getElementsByClass
    document.querySelector(".para1").innerHTML = "Again Replaced";

    // query selector replce getElementsByTagName'
    document.querySelector("p").innerHTML = "Changed";
*/

/*
    // more about on query selector
    document.querySelector("a").innerHTML = "new text"; // just a ke select

    document.querySelector("li a").innerHTML = "new text"; // li er a ke select

    document.querySelector(".my-div a").innerHTML = "new text"; // div er a ke select
*/

// querySelectorAll - index bole dite hoy
document.querySelectorAll("p")[0].innerHTML = "Start";
document.querySelectorAll("p")[1].innerHTML = "End";


/*
    summary:
        ~ How to replace getElement by querySelector
            - class er case a dot(.) use kora lagbe
            - id er case a hash(#) use kora lagbe

        ~ querySelector
            - normal selection
            - nested selection (parent child)

        ~ querySelectorAll
            - index bole dite hoy
*/
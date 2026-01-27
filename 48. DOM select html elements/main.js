// How to select html elements?
// ans : using DOM
// DOM = Document Object Model

// way1: getElementById
// var myHeading1 = document.getElementById("heading1"); // select html element
// myHeading1.innerHTML = "Hello JS"; // kaj

// var myPara = document.getElementById("para"); // select
// myPara.innerHTML = "This is a paragraph"; // kaj

// var myHeading2 = document.getElementById("heading2"); // select
// myHeading2.innerHTML = "Good bye, see you again"; // kaj

// way2: getElementsByTagName
// document.getElementsByTagName("h1")[0].innerHTML = "HI JS"; // 0 tomo index er h1 er vitorer lekha change kore hi js likha asbe
// document.getElementsByTagName("h1")[1].innerHTML = "Bye JS"; // 1 tomo index er h1 er vitore change asbe

// way3: getElementByClassName
document.getElementsByClassName("para1")[0].innerHTML = "Hi javascript";
document.getElementsByClassName("para2")[0].innerHTML = "Bye javascript";


/*
    summary:
        ~ HTML tag selection
            * syntax: document.getElementBySomething("selectorName");
            i. getElementByID => index bole dite hoy na
            ii. getElementsByTagName => index bolte hoy
            iii. getElementsByClassName => index bolte hoy

        ~ element er vitore text change
            i. .innerHTML = "j text dekhate cai seta"
*/
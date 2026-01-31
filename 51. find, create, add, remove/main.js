var link = document.getElementsByTagName("a")[0];
link.innerHTML = 'gitHub';

// for changing style
link.style.textDecoration = 'none';
link.style.color = 'red';
link.style.fontSize = '1.5rem';
link.href = 'http://github.com/seemantoKD';
link.target = 'blank';

var heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML = 'Say Hello';

// create new element inside my-div
var heading3 = document.createElement("h1");
var txt = document.createTextNode("This is heading 3");
heading3.appendChild(txt);
var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

var heading0 = document.createElement("h1");
var txt0 = document.createTextNode("This is heading 0");
heading0.appendChild(txt0);
myDiv.insertBefore(heading0, heading3);

// remove an element
var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);

// create class
document.getElementById("my-div").classList.add("myclass-2");

// class removing
document.getElementById("my-div").classList.remove("myclass-2");


/*
    summary: 
        1. How to find element and change style
        2. How to create new element
            ~ step:
                i. createElement use kore j element create korte cai ta ekta variable a rakhbo
                ii. creating eleement a j text show korte cai ta createTextNode diye set kore dibo
                iii. text + element
        3. How to remove an element
            steps: 
                1. j element remove korbo seta & tar parent find kora
                2. parent.removeChild diye element ta remove kore felbo
        4. How to create class and show classList in console
        5. How to remove class
*/
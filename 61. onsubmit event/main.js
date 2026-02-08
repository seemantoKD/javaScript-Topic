// finding the elements
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

// adding listener
form.addEventListener("submit", formHandler);

function formHandler(event){
    event.preventDefault(); // stop the autorefresh
    // console.log('hello');

    // not recomended process
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

    // recomended process
    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    console.log(userInfo);

    // after printing clear
    name.value = '';
    email.value = '';
    password.value = '';
}
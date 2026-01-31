var myVar = document.querySelector("#para");

function addStyle(){
    // myPara.style.color = "red";
    // myPara.style.fontSize = "3rem";
    // myPara.style.fontWeight = 'bold';
    // myPara.style.fontStyle = 'italic';
    myVar.classList.add("para-style");
}

function removeStyle(){
    // var myVar = document.querySelector("#para");
    myVar.classList.remove("para-style");
}
const checkBtn = document.querySelector('button');
const inputText = document.querySelector('input');

checkBtn.addEventListener('click', function(){
    // alert('btn is clicked');
    // console.log(inputText.value);

    try{
        if(inputText.value < 5){
            // console.log(inputText.value + 'less than range');
            throw 'input is too low';
        }

        else if(inputText.value > 10){
            // console.log(inputText.value + 'greater than range');
            throw 'input is too high';
        }
    }catch(err){
        console.log(err);
    }
});
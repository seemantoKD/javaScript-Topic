const input = document.querySelector('input');

input.addEventListener('blur', function(event){
    // console.log('blured'); // focus out er kachakachi
    // input.style.backgroundColor = 'transparent'
    // input.style.padding = '0rem';
    // console.log(event.target.value);
    console.log(event.target.value.toUpperCase());
    // input.value = event.target.value.toUpperCase();
});

input.addEventListener('focus', function(){
    // console.log('focused');
    input.style.backgroundColor = 'orange';
    input.style.padding = '2rem';
});

// input.addEventListener('focusin', function(){
//     console.log('focus in');
// });

// input.addEventListener('focusout', function(){
//     console.log('focus out');
// });
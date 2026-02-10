const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('copy', function(){
    // console.log('copied');
    p.innerText = 'copied';
});

input.addEventListener('paste', function(){
    // console.log('pasted');
    p.innerText = 'pasted';
});

input.addEventListener('cut', function(){
    // console.log('cutted');
    p.innerText = 'cutted';
});
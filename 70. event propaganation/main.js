const outerDiv = document.querySelector('#outer');
const innerDiv = document.querySelector('#inner');

outerDiv.addEventListener('click', () => {
    console.log('outer div is clicked');
}, true);

innerDiv.addEventListener('click', () => {
    console.log('inner div is clicked');
}, false);
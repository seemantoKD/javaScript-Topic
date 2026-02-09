// window.addEventListener("load", function(){
//     console.log('loaded');
// });

// window.addEventListener("unload", function(){
//     console.log('unloaded');
// });

// window.addEventListener("scroll", function(){
//     console.log('scrolled');
// });

// window.addEventListener("resize", function(){
//     // console.log('resized');

//     const width = window.outerWidth;
//     const height = window.outerHeight;
//     console.log(`height: ${height}, width: ${width}`)
// });

const details = document.querySelector("details");
details.addEventListener('toggle', function(event){
    // console.log(event.target.open);
    if(event.target.open == true){
        console.log('toggle open');
    }
    else{
        console.log('toggle close');
    }
});
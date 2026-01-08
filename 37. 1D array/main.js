// return highest number from an array
function highestNumber(arr){
    var mx = arr[0];
    for(var i = 1;i<arr.length;i++){
        if(arr[i] > mx){
            mx = arr[i];
        }
    }
    return mx;
}

var arr = [];
for(var i = 0;i<5;i++){
    arr[i] = Number(prompt("Enter element number"+i+': '));
}
var mx = highestNumber(arr);
document.write(mx);
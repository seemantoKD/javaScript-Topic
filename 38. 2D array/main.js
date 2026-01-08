// two dimensional array
// return highest scorer
function highestScorer(arr){
    var p = arr[0][0];
    var s = arr[0][1];
    for(var i = 1;i<arr.length;i++){
        if(arr[i][1] > s){
            p = arr[i][0];
        }
    }
    return p;
}

var arr = [
    ["seemanto", 95],
    ["Srinjoy", 25],
    ["panna", 45],
    ["ashim", 10],
];
document.write(highestScorer(arr));

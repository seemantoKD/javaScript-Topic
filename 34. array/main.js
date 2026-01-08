// var p1,p2,p3,p4,p5;
// p1 = "Seemanto"; 
// p2 = "Srinjoy";
// p3 = "Pradip";
// p4 = "Ashim";
// p5 = "Shanto";

// creating array
// syntax : var arrayName = new Array(sizeOfArray);
// var friends = new Array(5);
// friends[0] = "Seemanto";
// friends[1] = "Srinjoy";
// friends[2] = "Pradip";
// friends[3] = "Ashim";
// friends[4] = "Shanto";

// print array element
// syntax: document.write(freinds[0]);
// document.write(friends[0]);

// print full array
// syntax: just arrayName
// document.write(friends);

// find array size
// document.write(friends.length);


// array with initialize element and without declare size
// var friends = ["Seemanto", "Srinjoy", "Pradip", 1, "Shanto"];
// document.write(friends);


// library function for array
/*
    1. push function -> arrayr last a element push
    2. pop function -> arrayr last er element erase
    3. concat function -> ekta arrayr pore onno arekta array add kore
*/

// var friends = [];
// var friends = new Array(5);
// friends[0] = "Seemanto";
// friends[1] = "Srinjoy";
// friends[2] = "Pradip";
// friends[3] = "Ashim";
// friends[4] = "Shanto";

// ----- push function ----
// friends.push("seemanto");
// friends.push("srinjoy");
// friends.push("Shanto");
// document.write(friends[5]);
// document.write(friends.length);
// document.write(friends);

// ----- pop function ----
// friends.pop();
// document.write(friends);
// document.write(friends.length);

// ----concat two array----
var fg1 = [];
var fg2 = [];
fg1.push("Seemanto");
fg1.push("Kumar");
fg1.push("Dash.");
fg2.push("How");
fg2.push("Are");
fg2.push("You?");
// concat fg1 and fg2 in fg array
var fg = fg2.concat(fg1); // fg2 er pore fg1 array concat
document.write(fg);
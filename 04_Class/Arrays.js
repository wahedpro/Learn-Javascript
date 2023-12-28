console.log("This class we are learning Arrays");

/*
    1. Array is Collections of items
    2. Array index is start 0
    3. Javascript String is immutable on the other hand Array is mutable
    
*/

//create Array in javascript 
let friendName= ["Wahid", "Tyeb", "Hobaib", "Anic"];
// console.log(friendName);

//find the array size
console.log("Array size: "+friendName.length);

//find the array type to using #typeof
console.log(typeof friendName);

//Array Indices
console.log("Name is: "+friendName[0]);

//print all name using the index
for(let i=0; i<friendName.length; i++){
    console.log("My Friend Name is: "+friendName[i]);
}

//Update the Array index value
friendName[0]="Minhaz";

//for newline
console.log("\n");

//Print Array
for(let i=0; i<friendName.length; i++){
    console.log("My Friend Name is: "+friendName[i]);
}

//Add the new friend
friendName[4]="Jahid";

//for newline
console.log("\n");

//print Array
for(let i=0; i<friendName.length; i++){
    console.log("My Friend Name is: "+friendName[i]);
}

/*
    **So far we have learned how to print arrays using for loops. 
    But there are some other ways to print, let's learn these now **
    1. For loops (We need to access the index used for loop)
    2. For of loops (For of loop given the value not index) 
    3. for in loops
*/

// This is for of loops
for(let name of friendName){
    console.log("My Friend Name is: "+name);
}

//Array Methods

//Push(): add to end
friendName.push("Rakib");
console.log(friendName);

friendName.push("Hasan", "Fahim","Bublo");
console.log(friendName);

//Pop(): delete from and & return
let removeName = friendName.pop();
console.log(removeName);





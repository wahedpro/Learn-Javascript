 //---Problem-1
 /*
    For a given array with marks of sutdents -> 85,97,44,37,76,60
    Find the average marks of the entire class.
*/

// //Create a array
// let marks=[85,97,44,37,76,60];
// let sumAllNumber=0;
// let numberOfStudent=marks.length;
// //Using for of loops
// for(let number of marks){
//     sumAllNumber+=number;
// }
// console.log(`Average marks = ${sumAllNumber/numberOfStudent}`);

//---Problem-2
/*
    For a given array with prices of 5 items -> 250,645,300,900,50
    all items have on offer of 10% OFF on them. Change the Array to
    store final price after applying offer.
*/

let items=[250,645,300,900,50];
for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i]= items[i] - offer;
}

for (let i of items){
    console.log(i);
}



// find average marks

// let marks = [85,87,43,45,23,];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(avg);



let items = [250,645,300,900,50];
let i = 0;
for(let val of items){
 
   
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`After 10% offer: ${items[i]}`);
    i++;

}
console.log(items)




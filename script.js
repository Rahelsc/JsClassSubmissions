//array in js

// var arr = [];



// arr[0] = 'hello';
// arr[1] = 'world';

// console.log(arr.length);

// console.log(arr);
// console.log(arr[1]);

// //console.table(arr); // prints in table format in chrome tools

// var matrix = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f']
// ];

// console.log(matrix.length);

// console.log(matrix[1][2]);

// //console.table(matrix);

// matrix[2] = ['x', 'y', 'z']; // add a line to the array

// //can create a jagged array quite easily, just add a cell to pne of //the existing arrays

// // while loops
// var maxNum = 4;
// var counter = 0;

// while (counter<maxNum){
//   console.log(`Iteration number: ${counter}`);
//   counter++;
// }

// console.log(`after loop: ${counter}`);

// //do while - happens at least once
// do{
//   console.log(`Iteration number: ${counter}`);
//   counter++;
// } while (counter<maxNum);


// var arr3 = ["rahel", "hezi", "david"];

// for (var name in arr3){
//   console.log(arr3[name]);
// }

// var mat = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f']
// ];

// // for (var i = 0; i<mat.length; i++){
// //   for (var j = 0; j<mat[i].length; j++){
// //     console.log(`[${i}][${j}] ${mat[i][j]}`);
// //   }
// // }

// for (var row of mat){
//   for (var col of row)
//     console.log(col);
// }


//arrays
//Q1 - takes 6 nums from user and puts them in an array
var array = [];

for (var index = 0; index < 6; index++){
  array[index] = Number(prompt("please enter a number: "));
}

//Q2 - prints array
for (var index in array){
  console.log(`cell index is: ${index}, contents of cell is: ${array[index]}`);
}

//Q3 - searches the array from smallest and biggest
var max = array[0]; //initialization of var with value from array
var min = array[0]; //initialization of var with value from array
for (var item of array){
  if (item < min)
    min = item;
  else if (item > max)
    max = item;
}

console.log(`smallest number in array is: ${min}`);
console.log(`biggest number in array is: ${max}`);

//Q4 - sum of elements in array
var sum = 0;

for (var item of array){
  sum+=item;
}
console.log(`sum of all elements in the array is ${sum}`);

Q5 - dividing array to 2 arrays based on whether even or odd

var arrayOfIntegers = [];

for (var index = 0; index < 6; index++) {
  arrayOfIntegers[index] = Math.floor(Number(prompt("please enter a number: "))); //to make sure i recieve only integers
}

var even = [];
var odd = [];
var counterOdd = 0; // counter for odd array (counts up only when odd array is inserted a value)
var counterEven = 0; // counter for even array

for (var index in arrayOfIntegers) {
  if (arrayOfIntegers[index] % 2 == 0) {//check if even
    even[counterEven] = arrayOfIntegers[index];
    counterEven++;
  }
  else { //else not even
    odd[counterOdd] = arrayOfIntegers[index];
    counterOdd++;
  }

}

//prints odd array
for (var o of odd) {
  console.log(`odd element ${o}`);
}

//prints even array
for (var e of even) {
  console.log(`even element ${e}`);
}


//Q6 - prints next to biggest element in array

var max = arrayOfIntegers[0]; // initialization of max value with an element of the array
var min = arrayOfIntegers[0];
for (var item of arrayOfIntegers) {
  if (item > max)
    max = item; //finds biggest num
  else if (item < min)
    min = item; //finds smallest num
}

var maxBiggest = min; //initializtion of element that will hold the next biggest num. starting from min value
for (var index in arrayOfIntegers) {
  if (arrayOfIntegers[index] > maxBiggest && arrayOfIntegers[index] != max) { //moving through array and find biggest num that is not max
    maxBiggest = arrayOfIntegers[index];
  }
}
console.log(`the next biggest number from ${max} is ${maxBiggest}`); //print of next biggest


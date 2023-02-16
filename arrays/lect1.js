'use strict'

// slice method 
let arr =[`a`,`b`,`c`,`d`,`e`];
console.log(arr.slice(2));
// end index  is not included
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
//create shallow copy of array 
console.log(arr.slice());



// splice method actually mutate the orginal array it hard exact the element from the orginal
// to create the new array


// console.log(arr.splice(2))

// console.log(arr);


// most of the time the value that splice method return does interest us moe interest is in 
// to delete one or more element from original array  usecase to delete last element of
// an array


arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);



// reverse method reverse the orginal array means it means the orginal array
arr =[`a`,`b`,`c`,`d`,`e`];
const arr2=[`j`,'i','h','g','f'];
arr2.reverse();
console.log(arr2);


// #concat method concat two array but is donot mutate the original array

const letters=arr.concat(arr2);
console.log(letters);

console.log(arr);

// join method The join() method returns an array as a string.

//The join() method does not change the original array.

//Any separator can be specified. The default is comma (,).

console.log(letters.join('*'));
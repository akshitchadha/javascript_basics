  const arr =[23,11,64];
  console.log(arr[0]);
  console.log(arr.at(0));



// use case: when we need extra the last element 
// general practice 

console.log(arr[arr.length-1]); // but method chaining cannot be applied 

console.log(arr.slice(-1)[0]) // but method chaining cannot be applied 

console.log(arr.at(-1)) // method chaining can be applied 


console.log('jonas'.at(0));

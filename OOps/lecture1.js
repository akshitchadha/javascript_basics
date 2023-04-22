'use strict';


const  Person=function (firstname,birthyear) {
// instance properties
this.firstname=firstname;
this.birthyear=birthyear;


// bad Practice never created methods in constructor function
    // as this will created copies of method in new object which is bad for performance
     // solution use prototype inheritance
// this.calcAge=function () {
// console.log(2037- this.birthyear);
// }


}

// with prototype only one copy of the method exsists

Person.prototype.calcAge=function () {
 console.log(2037- this.birthyear);
};


const jonas=new Person('Jonas','1991');

// 1) NEW keyword created empty {}
// 2) this point to above empty object  this={} and function is called you can set properties in above
//   empty object inside function using this as it point to object
// 3) {} linked to prototype
// 4) function automatically returns {}

// now a variable can point to above return object

console.log(jonas)



const jack=new Person('Jack',1975);

jack.calcAge(35);


//  checking object prototype is of type    Person.prototype===jonas.__proto__
// true
// Person.prototype.isPrototypeOf(jonas)

// prototype in analogy as static in java

// we can also set properties on prototype which will be common to call objects


Person.prototype.species="home sapiens";


console.log(jonas.hasOwnProperty('firstname')); // check whether a property is his own or belong to prototype

console.log(jonas.hasOwnProperty('species'));




 console.log(jonas.__proto);


//  jonas.__proto__.__proto__ will be object hence proving prototype chain 

//  jonas.__proto__.__proto__.__proto__ will be null 



const array1=[1,2,3,3,1,2];

console.log(array1.prototype);

Array.prototype.unique=function(){

   return [...new Set(this)]; 
};


console.log(array1.unique());
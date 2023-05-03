'use strict';

class Car{

constructor(make,speed)
{
   this.make=make;
   this.speed=speed;
}


accelerate()
{
 this.speed=this.speed+10;
 console.log(`${this.make}  is going at ${this.speed} km/hr`);
}

break()
{
 this.speed=this.speed-5;
 console.log(`${this.make}  is going at ${this.speed} km/hr`);
}


}







const bmw =new Car('BMW',120);
const mercedes =new Car('Mercedes',95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();



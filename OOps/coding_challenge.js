const car=function (make,speed) {
    this.make=make;
    this.speed=speed;
};

car.prototype.accelerate=function () {
    this.speed=this.speed+10
    console.log(` the speed of  the car is ${this.speed}`)
};

car.prototype.brake=function () {
    this.speed=this.speed - 10
    console.log(` the speed of  the car is ${this.speed}`)
};


const electriccar=function(make,speed,charge) {
    car.call(this,make,speed);
    this.charge=charge;
};


electriccar.prototype=Object.create(car.prototype);
electriccar.prototype.constructor=electriccar;


electriccar.prototype.Docharge=function (chargeTo) {
    this.charge=chargeTo;
    console.log(`now electric car is charging at ${this.charge}`);
};


const MG=new electriccar('2010',50,'45');
MG.Docharge(90);
MG.accelerate();
MG.accelerate();
MG.accelerate()
MG.brake();
MG.accelerate();
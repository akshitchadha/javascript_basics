const Person=function (firstname,lastname) {
    this.firstname=firstname;
    this.lastname=lastname;
};

Person.prototype.calculateAge=function () {
    console.log(`my name is  ${this.firstname}  ${this.lastname}`)
};

const Student=function(firstname,lastname,course) {
    Person.call(this,firstname,lastname);
    this.course=course;
};


Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;


Student.prototype.introduce=function () {
    console.log(` ${this.firstname}my course  is ${this.course}`);
};


const mike=new Student('mike','roberts','computer science');
mike.introduce();
mike.calculateAge();
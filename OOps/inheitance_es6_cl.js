class PersonCl {

    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log('Hey ${this.firstName}');
    }

    get age() {
        return (2037 - this.birthYear);
    }


    set fullName(name) {
        console.log("in fullName setter ");
        if (name.includes(' ')) {
            this._fullName = name;
        } else {

            alert(`${name} is not fullName`)
        }
    }



    get fullName() {
        return this._fullName;
    }


}


class Student  extends PersonCl{

    constructor(fullName, birthYear,course) {
        super(fullName,birthYear);
        this.course=course;
    }


   introduce()
   {

       console.log(` MY name is ${ this.fullName} and my event in aethatics is`)

   }

    calcAge() {

        super.calcAge();
        console.log("i am overriden method in child class");
    }

}



const martha=new Student('Martha jones',2012,'400');
//martha.introduce();
martha.calcAge();
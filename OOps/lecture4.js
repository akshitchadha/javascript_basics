
// getter and setters are used for that validations mostly

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




const surinder=new PersonCl('surinder singh',1996)


console.log(surinder.fullName);




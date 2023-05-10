const PersonProto = {
    calcAge() {
        console.log(this.firstname);
    },

    init(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

}


// const steven=Object.create(PersonProto);
// console.log(steven);
// steven.firstname="niharika vashist chadha";
// steven.calcAge();

const akshit=Object.create(PersonProto);
akshit.init("akshit","chadha");
akshit.calcAge();
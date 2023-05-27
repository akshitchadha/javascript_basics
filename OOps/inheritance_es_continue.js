class Account {
    //public fields are not instances
    //locale = navigator.language;
    //
    #movements = [];
    #pin
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        
      
        console.log(`thanks for opening account ${this.owner}`);
    }


    getMovements()
    {

      return this.#movements;

    }



    getPin()
    {


        return this.#pin;
    }

    deposit(val) {

        this.#movements.push(val);
        return this;
    }


    withdraw(val) {

        this.deposit(-val);
        return this;
    }

    #approveLoan(val) {
        return true;
    }


    requestLoan(val) {

        if (this.#approveLoan(val)) {
            this.deposit(val);
        }

        console.log('Loan approved');
        return this;
    }


}



const acc1 = new Account('jonas', 'Eur', 1111);
acc1.deposit(250);
acc1.withdraw(140);



acc1.deposit(300).withdraw(500).deposit(20);

console.log(acc1);


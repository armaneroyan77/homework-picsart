/* Create a class BankAccount with _balance. Setter adds money (not replace). 
Getter returns current balance. Prevent negative deposits */

class BankAccount{

    constructor(){
        this._balance = 0;
    }

    set balance(value){

        if(value < 0) return "negative balance!";
        this._balance += value;

    }

    get balance(){

        return this._balance;
    }


}

const bal = new BankAccount();

bal.balance = -679;
console.log(bal.balance);

bal.balance = 88888;
console.log(bal.balance);


bal.balance = 20000;
console.log(bal.balance);



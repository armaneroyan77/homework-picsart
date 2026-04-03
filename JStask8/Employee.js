/*Create a class Employee with firstName and 
lastName. Create a getter fullName that returns "First Last" */

class Employee{

    #firstName;
    #lastName;

    constructor(firstName = "", lastName = ""){

        this.#firstName = firstName;
        this.#lastName = lastName;
    } 

    get fullName(){

        if(!this.#firstName){
            return "empty firstname";
        }

        if(!this.#lastName){
            return "empty lastname"
        }

        return `full name: ${this.#firstName} ${this.#lastName}`;
    }
}

const person = new Employee("Spider", "Man");
console.log(person.fullName);

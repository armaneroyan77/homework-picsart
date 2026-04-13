class Warrior{

    #HP;
    #name;
    #type
    constructor(name, type){
        this.#name = name;
        this.#HP = 150;
        this.#type = type;
    }

    getInfo(){
        return `${this.#type}: ${this.#name}, HP: ${this.#HP}`;
    }

    attack(){
        return `${this.#name} attacks with a sword`;
    }

}

class Mage{

    #HP;
    #name;
    #type

    constructor(HP, name, type){
        this.#name = name;
        this.#HP = 100;
        this.#type = type;
    }

    getInfo(){
        return `${this.#type}: ${this.#name}, HP: ${this.#HP}`;
    }

    attack(){
        return `${this.#name} casts a spell`;
    }
}


class Archer{

    #HP;
    #name;
    #type

    constructor(HP, name, type){
        this.#name = name;
        this.#HP = 120;
        this.#type = type;
    }

    getInfo(){
        return `${this.#type}: ${this.#name}, HP: ${this.#HP}`;
    }

    attack(){
        return `${this.name} shoots an arrow`
    }
}

class CharacterFactory{

    createCharacter(type, name){ 

        if(type.toLowerCase() === "warrior"){
            return new Warrior(name, type);
        }
        
        if(type.toLowerCase() === "mage"){
            return new Mage(name, type);
        }

        if(type.toLowerCase() === "archer"){
            return new Mage(name, type);
        }
        else{
            return "invalid type!";
        }

    }
}

const factory = new CharacterFactory();

const warrior = factory.createCharacter("warrior", "Thor");
const mage = factory.createCharacter("mage", "Merlin");
const archer = factory.createCharacter("archer", "Legolas");

console.log(warrior.getInfo()); // "Warrior: Thor, HP: 150"
console.log(mage.getInfo()); // "Mage: Merlin, HP: 100"
console.log(archer.getInfo()); // "Archer: Legolas, HP: 120"

console.log(warrior.attack()); // "Thor attacks with a sword"
console.log(mage.attack()); // "Merlin casts a spell"
console.log(archer.attack()); // "Legolas shoots an arrow"


class Coffee{
    
    getDescription(){
        return "Coffee";
    }

    getCost(){
        return 5;
    }
}

class Milk{

    constructor(coffee){
        this.coffee = coffee;
    }

    getDescription(){
        return this.coffee.getDescription() + ", Milk";
    }

    getCost(){

        if(coffee instanceof Coffee){
            return this.coffee.getCost() + 2;
        }

        throw new Error("invalid value!");
    }
}


class Sugar{

    constructor(coffeeWithMilk){
        this.coffeeWithMilk = coffeeWithMilk;
    }

    getDescription(){
         return this.coffeeWithMilk.getDescription() + ", Sugar";
    }

    getCost(){
        
        if(coffee instanceof Coffee){
            return coffeeWithMilk.getCost() + 1;
        }

        throw new Error("invalid value!");
    }
}



class Chocolate{

    constructor(coffeeWithMilkAndSugar){
        this.coffeeWithMilkAndSugar = coffeeWithMilkAndSugar;
    }

    getDescription(){
       return this.coffeeWithMilkAndSugar.getDescription() + ", Chocolate";
    }
 
    getCost(){
        
        if(coffee instanceof Coffee){
            return coffeeWithMilkAndSugar.getCost() + 2;
        }

        throw new Error("invalid value!");
    }
}


class Caramel{

    constructor(coffeeWithMilkAndSugarAndChocolate){
        this.coffeeWithMilkAndSugarAndChocolate = coffeeWithMilkAndSugarAndChocolate;
    }

    getDescription(){
        return this.coffeeWithMilkAndSugarAndChocolate.getDescription() + ", Caramel";
    }

    getCost(){
        
        if(coffee instanceof Coffee){
            return this.coffeeWithMilkAndSugarAndChocolate.getCost() + 2;
        }

        throw new Error("invalid value!");
    }
}
const coffee = new Coffee();
console.log(coffee.getDescription()); // "Coffee"
console.log(coffee.getCost()); // 5

const coffeeWithMilk = new Milk(coffee);
console.log(coffeeWithMilk.getDescription()); // "Coffee, Milk"
console.log(coffeeWithMilk.getCost()); // 7

const coffeeWithMilkAndSugar = new Sugar(coffeeWithMilk);
console.log(coffeeWithMilkAndSugar.getDescription()); // "Coffee, Milk, Sugar"
console.log(coffeeWithMilkAndSugar.getCost()); // 8

const fullOrder = new Caramel(new Chocolate(coffeeWithMilkAndSugar));
console.log(fullOrder.getDescription()); // "Coffee, Milk, Sugar, Chocolate, Caramel"
console.log(fullOrder.getCost()); // 12


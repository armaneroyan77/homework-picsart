/* Create a class Product with _price. Setter sets price. 
Getter returns price with 10% discount  */

class Product{

    constructor(price = 0){
        this._price = price;
    }

    set price(value){
        if(value < 0) return "price must be bigger or equal 0!";

        this._price = value;
    }

    get price(){
        return (this._price - this._price * 0.1);
    }


}

const pr1 = new Product();

pr1.price = 5667;
console.log(pr1.price);

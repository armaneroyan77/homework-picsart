/* Create a class Cart with _total = 0.
   Setter adds item price to total.
   Getter returns total.
 */

class Card{

    constructor(total = 0){
        this._total = total;
    }

    set total(value){

        if(value < 0){
            console.log("invalid input!");
            return;
        }
        
        this._total += value;
    }

    get total(){
        return this._total;
    } 

}

const c1 = new Card();

c1.total = -29000;

console.log(c1.total);


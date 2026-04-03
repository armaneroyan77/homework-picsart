/* Create a class Counter with _count = 0. Method increment() increases count. 
Getter returns current count  */

class Counter{
    

    constructor(){

        this._count = 0;

    }

    set count(value){

        this._count += value; 

    }

    get count(){

        return this._count;
    }
}


const c1 = new Counter();
c1.count = 1;
console.log(c1.count);
c1.count = 2;
console.log(c1.count);
c1.count = 2;
console.log(c1.count);



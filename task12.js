class Comp{

    constructor(){
        this.loose = 0;
        this.strick = 0;
    } 

}

function compare(val1, val2){

    const obj = new Comp(); 
    obj.strick = val1 === val2;
    obj.loose = val1 == val2;
    return obj;

}

let val1 = 12;
let val2 = "12";

const obj = compare(val1, val2);
console.log(obj.loose);
console.log(obj.strick);




 let key = "prop";
const cond = [1, 4, 12, NaN, 7, "sa", undefined, +Infinity, -0, "efdsc"];
let object = {};

let i = 0;

for(let value of cond){
  
    if(value){

        let key = "prop";
        key += ++i;
        object[key]= value;
       
    }

}

console.log(object);

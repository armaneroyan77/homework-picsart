let obj1 = {a: 12, b: 32};
let obj2 = {a:12, b: 32};

let isEqual = (obj1, obj2)=>{

    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if(obj1Length !== obj2Length) return false;

    for(let key in obj2){
        if(!(key in obj2) || (obj1[key] !== obj2[key])){
            return false;
        }
    }
    return true;
}


console.log(isEqual(obj1, obj2));


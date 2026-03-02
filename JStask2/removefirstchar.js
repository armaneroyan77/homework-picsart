function removeFirstChar(str){

    if(str.length <= 1){
        return "\"\""
    }

    return str.slice(1);
}

let str = "Chlp";
let new_str = removeFirstChar(str);
console.log(new_str);

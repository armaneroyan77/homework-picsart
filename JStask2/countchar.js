function countChar(str, char, index){

    if(index < 0){
        return 0;
    }

    if(str[index] !== char){
        return countChar(str, char, index - 1);
    }

    return 1 + countChar(str, char, index - 1);
}

let str = "lfhelllosffdlf";
console.log(countChar(str, "f", str.length - 1));

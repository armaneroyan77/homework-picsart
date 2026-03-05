function reverse(str, end){

    if(end < 0){
        return ""; 
    }

    return str[end] + reverse(str, end - 1);

}

let str = "ISKAT TAkSI";
console.log(reverse(str, str.length - 1));
str = "olleh";

console.log(reverse(str, str.length - 1));

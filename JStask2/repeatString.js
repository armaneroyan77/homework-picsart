function repeatString(str, n){

    if(str.length < 1 ){
        return "";
    }

    if(n <= 1){
        return str;
    }

    return repeatString(str, n - 1) + str;

}

let str = "e";
console.log(repeatString(str, 10));

function odd_or_even(num){   // return 1 even: 0 odd: -1 not a number

    if(typeof num !== "number"){
        return "NOT A NUMBER";
    }

    else if(num & 1){
        return "ODD";
    }

    return "EVEN";

}

let num = 43;
console.log(odd_or_even(num));

/*
function countDigits(num){
    let count = 0;

    while(num){
        num = Math.trunc(num / 10);
        ++count;
    }

    return count;
}
*/

function countDigits(num){
    
    if(!num){
        return 0;
    }

    return 1 + countDigits(Math.trunc(num / 10));
}



let number = 12121323;
console.log(countDigits(number));

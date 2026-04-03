function sum(num1, num2, num3){
    return num1 + num2 + num3;
}

const array = [10, 20, 30];
console.log(sum.apply(null, array));
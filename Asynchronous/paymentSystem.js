function pay(balance, amount){

    if(amount <= balance){
        return Promise.resolve("Payment successful")
    }

    return Promise.reject("Not enough money");
}

pay(2, 100).then(message => {
    console.log(message);
})
.catch(err => {
    console.log(err);
})
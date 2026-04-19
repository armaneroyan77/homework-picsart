let Account = {
    balance: 1000,
    currency: "$"
}

Account[Symbol.toPrimitive] = function(hint){
    if (hint === "number") return this.balance;
    if (hint === "string") return `Account Balance: ${this.balance} ${this.currency}`;
    return this.balance;
}

// Object.defineProperty(Account, Symbol.toPrimitive, {
//     value: function(hint){
//         if (hint === "number") return this.balance;
//         if (hint === "string") return `Account Balance: ${this.balance} ${this.currency}`;
//         return this.balance;
//     }
// })

console.log(Account  + 4);
console.log(String(Account));
console.log(++Account);



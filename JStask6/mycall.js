Function.prototype.myCall = function(thisArg, ...args) {
    const newThisArg = thisArg ?? globalThis;
    const result = Symbol();
    newThisArg[result] = this;
    res = newThisArg[result](...args);
    delete newThisArg[result];
    return res;
}
// TODO


function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}


const user = { name: "Joe Doe" };
console.log(showInfo.myCall(user, "New-York", "USA"));
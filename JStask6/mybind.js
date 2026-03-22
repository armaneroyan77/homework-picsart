Function.prototype.myBind = function(thisArg, ...args) {

    let newThisArg = thisArg ?? globalThis;

    return (...new_args) => {
        let result = Symbol();
        newThisArg[result] = this;
        let res = newThisArg[result](...args, ...new_args);
        delete newThisArg[result];
        return res;

    }
    
}

function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

const boundShowInfo = showInfo.myBind(user, "New York");
console.log(boundShowInfo("USA"));



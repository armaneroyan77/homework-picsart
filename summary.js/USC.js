
// Input
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

const input = new WeakMap();

function trackAccess(original){
    let count = 0
    return new Proxy(original, {
        get(target, prop){
            input.set(target, ++count);
            return Reflect.get(target, prop);
        }
    })
}

function getStats(original){
    return input.get(original);
}
// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3


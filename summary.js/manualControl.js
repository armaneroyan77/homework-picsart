// Input
const mixedMap = new Map([
  [1, 'num'],
  ['str', 'text'],
  [true, false]
]);

const iterableMixedMap = mixedMap.entries();
iterator = iterableMixedMap.next(); 

while(!iterator.done){

    if(typeof iterator.value[1] === "string"){
        console.log(iterator.value);
    }

    iterator = iterableMixedMap.next();
}


// Expected Output in console
// [1, 'num']
// ['str', 'text']
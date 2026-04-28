// Input
let post1 = { title: 'JS is awesome' };
let post2 = { title: 'Node.js event loop' };
const wMap = new WeakMap();

function addLike(post, name){
    if(!wMap.has(post)){
        wMap.set(post, []);
    } 

    wMap.get(post).push(name);
}

function getLikes(post){

    if(wMap.has(post)){
        return wMap.get(post);
    }
    return [];
}

addLike(post1, 'John');
addLike(post1, 'Anna');

// Expected Output
console.log(getLikes(post1)); // ['John', 'Anna']
console.log(getLikes(post2)); // [] or undefined
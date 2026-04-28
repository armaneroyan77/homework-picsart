
// Input
const setA = new Set(['reading', 'games', 'music']);
const setB = new Set(['games', 'sports']);

function intersection(setA, setB){
    const commonHobbies = new Set();

    for(let hobbie of setA){
        if(setB.has(hobbie)){
            commonHobbies.add(hobbie);
        }
    }

    return commonHobbies;
}


function difference(setA, setB){
    
    const commonHobbies = new Set();
    for(let hobbie of setA){
        if(!setB.has(hobbie)){
            commonHobbies.add(hobbie);
        }
    }

    return commonHobbies;;
}

// Expected Output
console.log(intersection(setA, setB)); 
// Set(1) { 'games' }

console.log(difference(setA, setB)); 
// Set(2) { 'reading', 'music' }


// let obj1 = {a: 12, b: {c:12, d:34}};
// let obj2 = {a:12, b: {c:12, d:34}};

// let isEqual = (obj1, obj2) => {
    
    //     if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    
    //     for(let element in obj1){
        
    //         if(typeof obj1[element] !== "object" || obj1[element] === null){
        //             if(obj1[element] !== obj2[element]){
            //                 return false;
            //             }
            //         }
//         else{
//             if(!isEqual(obj1[element], obj2[element])){
//                 return false;
//             }
//         }

//     }
//     return true;
// }

// console.log(isEqual(obj1, obj2));


let obj1 = {a: 12, b: {c:12, d:34}};
let obj2 = {a:12, b: {c:12, d:33}};

function isEqual(obj1,obj2){

    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


let result = isEqual(obj1,obj2);
console.log(result);



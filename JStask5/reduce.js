// // const res = (acc, currVal, index) => acc + currVal + index ** 2;

// // const reduce = (fn, acc, arr) => {

// //     if(typeof fn !== "function") return "fn is not function";
// //     if(!Array.isArray(arr)) return "arr is not Array" 

// //     for(let indx = 0; indx < arr.length; ++indx){

// //         if(indx in arr){
// //             acc = res(acc, arr[indx], indx, arr);

// //         }
// //     }

// //     return acc;
// // };

// // const arr = [1, 3, null, 4, 5, 6];
// // console.log(reduce(res, 0, arr));



// //********************************* */
// let obj1 = {a: 12, b: {c:12, d:34}};
// let obj2 = {a:12, b: {c:12, d:34}};

// let isEqual = (obj1, obj2) => {
    
//         if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    
//         for(let element in obj1){
//             // console.log("obj2: " + obj2[element]);
            
//             if(typeof obj1[element] !== "object"){
                    
//                     if(obj1[element] !== obj2[element]){
//                             return false;
//                         }
//                     }
//         else{
//             if(!isEqual(obj1[element], obj2[element])){
//                 return false;
//             }
//         }

//     }
//     return true;
// }

// console.log(isEqual(obj1, obj2));

// console.log(typeof null);



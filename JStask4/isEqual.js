// let obj1 = {a: 12, b: {c:12, d:34}};
// let obj2 = {a:12, b: {c:12, d:34}};

// let isEqual = (obj1, obj2) => {
    
//         if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    
//         for(let element in obj1){
        
//             if(typeof obj1[element] !== "object" || obj1[element] === null){
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


// let obj1 = {a: 12, b: {c:12, d:34}};
// let obj2 = {a:12, b: {c:12, d:33}};

// function isEqual(obj1,obj2){

//     return JSON.stringify(obj1) === JSON.stringify(obj2);
// }


// let result = isEqual(obj1,obj2);
// console.log(result);

// let dat = new Date();
// let obj = [];
// let objToStr = obj.toString();
// console.log(objToStr.valueOf());

// let arr = new Array();
// let name = "Arman";
// let obj = {for :"Artak", foo: function() {return 1;}};
// let new_proto = Object.create(obj);
//  console.log(new_proto.foo());


// let object = {"name": "Arman"};

// object.name = "Artak";
// console.log(object);

// const inherit = (obj, ret_obj)=>{

//     for(let key in obj){

//         if(typeof obj[key] !== "object"){
//             ret_obj[key] = obj[key];
//         }

//         else{
//             inherit(obj[key], ret_obj);
//         }
//     }
//     return ret_obj;
// }



// let obj1 = {a: 23, f: {n: 4}};


// let obj2 = inherit(obj1, {});
// obj2.k = {c: 33, g: 45};
// console.log(obj2);

// let obj3 = inherit(obj2, {});
// console.log(obj3);

// console.log(obj3.a, obj3.c, obj3.g);
// a = 34;

// let obj = {
//     a: 23,

//     foo: () => {console.log(globalThis.a);}
// }


// let Arrowobj = {
//     a: 23,

//     foo: function(){

//         console.log(this.a);
        
//     }
// }


// obj.foo();
// Arrowobj.foo();
let o = {a: 3, b: 3};

let obj = Object.create(null);
console.log(Object.prototype.isPrototypeOf(obj));
console.log(null.toString());


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


// let obj = {0: 1, 1: "sdfsdf", 2:5, 3:"sdfs"};
// let arr = Object.entries(obj);
// let index = 0;
// // console.log(arr);

// for(let val of arr){
//     console.log(val[1]);
    
//     // console.log(val[1]);
// }

// let arr = [];
// arr[1000] = "sdf";
// console.log(arr.length);

// let foo = (a, b) => {
//     return a + b;
// }

// console.log(foo(12, 45));

// let obj = {
//     a: 23,
//     o: () => {
//         console.log(globalThis.a);
//     }

// }


// a = 23;

// let obj1 = {
//     a: 23,
//     o: function() {
//         console.log(this.a);
//     }

// }

// obj.o();
// obj1.o();

// console.log(typeof Array());

// let arr = [12, 234, 245, 23, 23, 53, 23, 1, 5, 34, 555];
// arr.length =  4;
// console.log(arr);
// let ar3 = [12, 44, 56];
// ar3.length = 2;
// console.log(ar3);



// let arr2 = [12, 45, 4];
// delete arr2[2];
// console.log(arr2.length);


// let arr = [12, 23, 534, 2, 34, 4, 545];

// let max = 0;

// arr.forEach(
//     (a, b) => {
//         max = (a > b)? b : a; 
//     }
// )
// let ar = "hello, dvds,  sdfs, adfsdf".split(",");
// console.log(ar);

// console.log([] == false);

// let join_arr = arr.join("+");
// console.log(join_arr);
// arr.reverse();
// console.log(arr);

//  arr.sort();
//  console.log(arr);
 
//  arr.sort((a, b) => {return a - b});
//  console.log(arr);
 
// function foo(){
//     console.log(x);
    
// }

// function boo(){
//     let x = 12;
//     foo();a
// }

// // boo();
// foo();

// let x = 23;
// var y = 3;
// z = 45;

// console.log(globalThis.x);
// console.log(globalThis.y);
// console.log(globalThis.z);

// const arr = new Array(8, 3);
// console.log(arr);

// let a = 12, b = 14;

// [a, b] = [b, a];
// console.log(b);


// const arr = [1, 2, 3, 4];
// arr[2] = arr;
// console.log(arr[2][2][2][2]);

// let person = {name: "Alisa"};
// let arr1 = [person];
// person = null;
// console.log(arr1[0]);


// var strStr = function(haystack, needle) {

//     const offset_len = needle.length;
//     const len = haystack.length;
//     for(let i = 0; i < len; ++i){

//         if(haystack[i] === needle[0] && haystack[i + offset_len - 1] === needle[offset_len - 1]){
            
//             let j = i;
//             let res = "";
            
//             while(j < (offset_len + i)){
//                 res = res + haystack[j];
//                 ++j;
//             }

//             console.log(res);
            
//             if(res === needle){
//                 return i;
//             }
//         }

//     }

//     return -1;
// };

// const str = "hellbo";
// console.log(strStr(str, "llb"));

// function sayName() {
//   console.log(this.name);
// }

// const user = { name: "Arman" };

// const f = sayName.bind(user);

// f();


// function show() {
//   console.log(this.name);

// }

// const obj1 = { name: "A" };
// const obj2 = { name: "B" };

// const f = show.bind(obj1);

// f.call(obj2);
// function a(){
//         console.log(this.x);
//     }

// function A() {
//   this.x = 10;
//   return { x: 20 };
// }

// const obj = { x: 100 };

// const Bound = A.bind(obj);

// const res = new Bound();

// console.log(res.x);
// console.log(obj.x);
// console.log(Bound);

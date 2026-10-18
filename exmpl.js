// function Cordinant(x, y){
//     this.x = x;
//     this.y = y;
// }

// Cordinant.prototype.distance = function(){
//     return (Math.sqrt(this.x**2 + this.y**2));
// }

// function Point(x, y, pointColor){
//     Cordinant.call(this, x, y);
//     this.pointColor = pointColor;
// }


// Point.prototype = Object.create(Cordinant.prototype);
// Point.prototype.constructor = Point;

// Point.prototype.getInfo = function(){
//     return `Cordinant: (X:${this.x}, Y:${this.y})\nPoint color: ${this.pointColor}`;
// }

// const obj = new Point(1, 4, "green");
// console.log(Object.getOwnPropertyNames(obj.__proto__));
// console.log(obj.distance());
// console.log(obj.getInfo());


// function Discount() {}
// Discount.prototype.getAmount = function(price) { return price; };

// function VIPDiscount() {}
// VIPDiscount.prototype = Object.create(Discount.prototype);
// VIPDiscount.prototype.getAmount = function(price) { return price * 0.8; };

// const discount = new Discount();
// const vipDiscount = new VIPDiscount();

// console.log(discount.getAmount(123));

// console.log(vipDiscount.getAmount(123));

// 1. Քառակուսին ինքը գիտի իր մակերեսը հաշվելու ձևը

// class InterfaceGet{
//     getArea(){throw new Error("this is inteface method!");}
// };

// function Square(size) {
//     this.size = size;
// }

// Square.prototype = Object.create(InterfaceGet.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.getArea = function() {
//     return this.size * this.size;
// };

// // 2. Շրջանը նույնպես գիտի իր ձևը
// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype = Object.create(InterfaceGet.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius * this.radius;
// };

// // 3. AreaCalculator-ը դառնում է «Փակ» փոփոխությունների համար
// function AreaCalculator() {}
// AreaCalculator.prototype.calculate = function(shape) {
//     // Նրան հետաքրքիր չէ, թե սա ինչ պատկեր է, նա պարզապես կանչում է getArea()
//     if(shape instanceof InterfaceGet){
//         return shape.getArea();
//     }

// };

// // Հիմա եթե ուզում ենք Եռանկյուն ավելացնել...
// function Triangle(base, height) {
//     this.base = base;
//     this.height = height;
// }

// Triangle.prototype = Object.create(InterfaceGet.prototype);
// Triangle.prototype.constructor = Triangle;

// Triangle.prototype.getArea = function() {
//     return (this.base * this.height) / 2;
// };

// // Մենք չձեռք տվեցինք AreaCalculator-ի կոդին, բայց համակարգն ընդլայնվեց:

// const area = new AreaCalculator();
// const triangle = new Triangle(12, 4);
// console.log(area.calculate(triangle));


// class A{
//     foo(){
//         console.log("hoi");
        
//     }
// }


// const f = new A();

// Object.defineProperty(f.__proto__, "foo", {
//     enumerable: true
// })

// console.log(Object.getPrototypeOf(f));


// console.log("hello world");

// setTimeout(() => {
//     console.log("REQUEST SEDED SUCCESFULLY");
    
// }, 3000);

// let x = 12;
// console.log(x + 10);
// const obj = {x: 0};
// let intervalID = null;

// intervalID = setInterval(() => {
//     console.log(obj);
//     ++obj.x;
// }, 1000)

// setTimeout(() => {
//     console.log(obj);
//     if(intervalID !== null){
//         console.log("RESPONSE CODE 202");
//         clearInterval(intervalID)
//     }  
// }, 10000);

// const str = "abcde" + "abcde";
// console.log(str.includes("cdeab"));
// const fn = function(){
//     console.log('a');
    
// }
// console.log(fn instanceof Object)
// const a = new Number();
// console.log(a);

// console.log(NaN);
// console.log(typeof 5n);



// console.log(typeof a.valueOf() === typeof "3");

// var compose = function(functions) {
    
//     return function(x) {
//         let res = functions[functions.length - 1](x);
//         for(let i = functions.length - 2; i >= 0; --i){
//             res = functions[i](res);
//         }
//         return res;
//     }
// };

// var compose = function(functions) {
//     return function(x) {
//         let res = x;
//         let len = functions.length;
//         for(let i = 0; i < len; ++i){
//             res = (functions.pop())(res);
//         }
//         return res;
//     }
// };



// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9


// function memoize(fn) {
//     const cash = new Map();
//     return function() {
        
//     }
    
// }

 

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//  	callCount += 1;
//     return a + b;
//  })
// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(memoizedFn(2, 3)) // 5
// console.log(callCount) // 1 

// fn = function (list) {   
//     return String(list[0]); 
// }

// Array.prototype.groupBy = function(fn) {
//     const map = new Map();
//     for(let i = 0; i < this.length; ++i){
//         const item = fn(this[i]);
//         console.log(item);
        
//         if(!map.has(item)){
//             const arr = [];
//             arr.push(this[i]);
//             map.set(item, arr);
//         }

//         else{
//             map.get(item).push(this[i]);
//         }
//     }
//     return map;
// };


// const array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]

// console.log(array.groupBy(fn)) // {"1":[1],"2":[2],"3":[3]}

// console.log(typeof [] ===  "object");

// function compactObject(obj) {

//     for(let key in obj){

//         if(typeof obj[key] === "object"){
//             compactObject(obj[key]);
//         }
        
//         if(!obj[key]){
            
//             if(Array.isArray(obj)){
//                 // console.log(obj);
//                 obj.splice(key, 1); 
             
                
//             }
//             else{
//                 delete obj[key];
//             } 
//         }

//     }
// };

// const obj = {"a": null, "b": {"c":false, "d":{"f": {"g": undefined, "e": 4}}}, "arr": [0, 1, false, null, { x: undefined, y: 5 }]};
// compactObject(obj);
// console.log(obj);

// var join = function(arr1, arr2) {

//     const joinArr = [];

//     for(const obj2 of arr2){
//         const resObj = arr1.find(e => e["id"] === obj2["id"]);
        
//         if(!resObj){
//             joinArr.push(obj2);
//             console.log("push from arr2",obj2);
            
//         }
//         else{
//             for(let key in resObj){
//                 if(!obj2[key]){
//                     obj2[key] = resObj[key];
//                 }
//             }
//             joinArr.push(obj2);
//             console.log("push from arr2",obj2);


//         }
//     }
    
//     const temp = [...joinArr];
//     console.log("temp", temp);
    
//     for(const obj of arr1){
//         let flag = false;
//         for(const objTmp of temp){
//             if(obj["id"] === objTmp["id"]){
//                 flag = true;
//                 break;
//             }
//         }

//         if(!flag){
//             joinArr.push(obj);
//         }
//     }

//     return joinArr.sort((a, b) => a["id"] - b["id"]);
// };

// // temp [ { id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 } ]
// const arr1 = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}]
// const arr2 =[{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]
// console.log(join(arr1, arr2));

// const obj = Object.create({a:123});
// console.log(Object.getOwnPropertyNames(obj));
// const obj = {};
// console.log(obj.prop.nested);


//  function commonPrefix(str1, str2){
//     let size = str1.length;
//     let res = "";
//     for(let i = 0; i < size; ++i){
//         if(str1[i] !== str2[i]){
//             break;
//         }
//         res += str1[i];
//     }
//     return res
//  }

//  var longestCommonPrefix = function(strs) {
//     let res = strs[0];
//     for(let i = 1; i < strs.length; ++i){
//         res = commonPrefix(res, strs[i]); 
//     }    

//     return res;
// };

// strs = ["flower","flow","flight"];
// console.log(longestCommonPrefix(strs));
 

/**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
    
// };
// let s = "([)]";
// console.log(isValid(s));

const cb = (value, index, array) => {
    if(value % 2 == 0){
        array[index]++;
    }
}


// function myForEach(array, cb){
//     for(let i = 0; i < array.length; ++i){
//         cb(array[i], i, array);
//     }
// }

// let array = [12, 34, 34, 6, 34, 3, 9, 0];
// myForEach(array, cb);
// console.log(array);

// function Foo(x, y){

//     this.x = x;
//     this.y = y;

//     this.f = function(){
//         return this.x + this.y;
//     }
// }

// function myNew(Constructor, ...args){
//     const obj = {};
//     obj.__proto__ = Constructor.prototype;
//     const result = Constructor.call(obj, ...args)
//     return (typeof result === "object") ? result : obj;
// }

// const y = new Foo(12, 34);
// const obj = myNew(Foo, 12, 45);
// console.log(Object.getOwnPropertyNames(obj));
// console.log(obj.f());


// Function.prototype.myCall = function(thisArg, ...args){
//     const newThisArg = (thisArg == null)? globalThis : Object(thisArg);
//     const key = Symbol();
//     newThisArg[key] = this;
//     const result = newThisArg[key](...args);
//     delete newThisArg[key];
//     return result;
// }

// function foo(){
//     return this.x + this.y;
// }

// const obj = {x:12, y:44};

// const res = foo.myCall(obj);
// console.log(res);

// Function.prototype.myBind = function(thisArg, ...args){
//     const newThisArg = (thisArg == null)? globalThis : Object(thisArg);
//     return (...new_args) => {
//         const key = Symbol();
//         newThisArg[key] = this;
//         const result = newThisArg[key](...args, ...new_args);
//         delete newThisArg[key];
//         return result;
//     }
// }

// function foo(lastname, firstname){
//     console.log(this.x + this.y);
//     console.log(`${lastname} ${firstname}`);   
// }

// const obj = {x:45, y:33};

// const res = foo.myBind(obj, "Eroyan");
// res("Arman");

// const obj = {

//     [Symbol.iterator](){
        
//         return {
//             x: 0,

//             next(){
//                 if(this.x < 100){
//                     return {value: this.x++, done: false}
//                 }
//                 return {done: true};
//             }
//         }
//     }
// }

// for(let i of obj){
//     console.log(i);   
// }


// function* nums(){
//     let x = 0;
//     while(true){
//         yield x++;
//     }
// }

// const iter1 = nums();
// console.log(iter1);
// console.log(iter1.next().value);
// console.log(iter1.next().value);

// class MyClass{

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     getName(){
//         return this.name;
//     }
// }

// function FMyClass(name, age){
//     this.name = name;
//     this.age = age;
// }

// FMyClass.prototype.getName = function(){
//     return this.name;
// }

// const person1 = new MyClass("Arman", 23);
// const person2 = new FMyClass("Artak", 23);

// console.log(person1);
// console.log(person2);

// console.log(Object.getPrototypeOf(person1));
// console.log(Object.getPrototypeOf(person2));

// console.log(person1.getName());
// console.log(person2.getName());
// console.log(Object.getOwnPropertyNames(person1));
// console.log(Object.getOwnPropertyNames(person2));


// class Vehicle{
//     constructor(type){
//         if(new.target === Vehicle){
//             throw new Error("can not create instace from this class!");
//         }
//         this.type = type;
//     }
// }

// class Car extends Vehicle{
//     constructor(type, name){
//         super(type);
//         this.name = name;
//     }

//     getInfo(){
//         console.log(`${this.type}: ${this.name}`);
//     }

// }

// let car = new Car("Sedan", "mersedes");
// car.getInfo();


// const digits = [1, 2, 3];

// const extraNumbers = {
//     "0": 4,
//     "1": 5,
//     "2": 6,
//     "length": 3
// }

// let concArr = digits.concat(extraNumbers);
// console.log(concArr);

// extraNumbers[Symbol.isConcatSpreadable] = true;
// concArr = digits.concat(extraNumbers);
// console.log(concArr);


// const arr = [2, 5];
// arr[Symbol.isConcatSpreadable] = false;
// concArr = concArr.concat(arr);
// console.log(concArr);

// function foo({name, age}){
//     console.log(name);
//     console.log(age);
// }

// const obj = {name: "Arman", age: 23};
//  foo(obj);

// async function getData(){
//     try{
//         let response = await fetch("dot/Data");

//         if(!response.ok){
//             throw new Error("fetch data is done unsucessfuly");
//         }

//         let data = await response.json();
//         console.log(data);
//     }

//     catch(err){
//         console.log(err);
//     }
// }

// console.log(20 % 10);


// function myInstanceOf(obj, Constructor){

//     if(obj == undefined) return false;
//     let proto = Object.getPrototypeOf(obj);

//     while(proto){
//         if(proto === Constructor.prototype) return true;
//         proto = Object.getPrototypeOf(proto);
//     }

//     return false;
// }

// const obj = {};

// console.log(myInstanceOf(4, Number));

// function toSum(nums, target){

//     let left = 0;
//     let right = nums.length - 1;

//     while(left <= right){

//         const sum = nums[left] + nums[right];
//         if(sum > target) {
//             right--;
//         }
//         else if(sum < target) {
//             left++;
//         }

//         else {
//             return [left, right];
//         }
//     }
// }

// const nums = [1, 4, 9, 32, 65, 203, 890];
// const target = 207;
// console.log(toSum(nums, target));

// function solvExpression(exp){
//     let sum = 0;
//     const stack = [];
//     for(let i = 0; i < exp.length; ++i){
//         if(!/\d/.test(exp[i])){
           
//             stack.push(sum);
//             stack.push(exp[i]);
//             sum = 0;
//         }
//         else{
//             sum = sum * 10 + (+exp[i]) % 10;
//         }

//     }
//     stack.push(sum);
//     let result = stack[0];

//     for(let i = 1; i < stack.length; i+=2){
//         if(stack[i] === "-"){
//             result -= stack[i + 1];
//         }
//         else{
//             result += stack[i + 1];
//         }
    
//     }
//     console.log(stack);
    
//     return result;
// }

// const expression = "33-12-434+4";
// console.log(solvExpression(expression));



// const nums = [];
// Math.max()

// function longestMountain(arr) {
//     let length = 0;
//     for(let i = 1; i < arr.length - 1; ++i){
//         if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
//             let left = i - 1;
//             let right = i + 1;

//             while(left > 0){
//                 if(arr[left] < arr[left - 1]){
//                     break;
//                 }
//                 left--;
//             }

//             while(right < arr.length - 1){
//                 if(arr[right] < arr[right + 1]){
//                     break;
//                 }
//                 right++;
//             }
                       
//             let tmp = right - left + 1;
//             length = (tmp > length)? tmp : lenght;
//             console.log(left, right);
//         }
//     }
//     return length;
// };
var longestMountain = function(arr) {
    le`t up = 0;
    let down = 0;
    let maxLength = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > arr[i - 1]) {
            // շարունակում ենք բարձրանալ
            up++;

            // նոր mountain ենք սկսում
            if (down > 0) {
                up = 1;
                down = 0;
            }

        } else if (arr[i] < arr[i - 1]) {
            // կարող ենք իջնել միայն եթե արդեն բարձրացել ենք
            if (up > 0) {
                down++;

                maxLength = Math.max(
                    maxLength,
                    up + down + 1
                );
            }

        } else {
            // հավասար արժեքը mountain-ը կոտրում է
            up = 0;
            down = 0;
        }
    }

    return maxLength;
};
const arr = [2,1,4,7,3,2,5,13,9,8,7,6,5,4,3,2,1];
console.log(longestMountain(arr));




function insertionSort(arr){
    for(let i = 1; i < arr.length; ++i){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const arr1 = [34, 3, 23, 4, 0, 12, 23, 7];
console.log(insertionSort(arr1));



// function partial(func, ...args){
    
//     return function(...restArgs){
//         return func.call(user, ...args, ...restArgs);
//     }


// }


// const user = {
    
//   name: "Joe",

//   greet(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
//   }

// };

// const sayHi = partial(user.greet, "Hi");
// console.log(sayHi("!"));

// console.log(Number(1n));


// function FOO(value){
//   return this.value = value;
// }


// FOO.prototype.boo = function(v){
//   return this.value + v;
//  }

//  const p1 = new FOO(12);
//  const p2 = new FOO(34);

//  console.log(p1.boo(3));
//  console.log(p2.boo(5));\

//*************************************************************************
 
// const car = {
//     brand: "Tesla",
//     start() {
//         const self = this;
//         setTimeout(function() {
//             console.log(self.brand + " is starting...");
//         }, 1000);
//     }
// };

// car.start();


// const car = {
//     brand: "Tesla",
//     start() {
//         setTimeout(() => {
//             console.log(this.brand + " is starting...");
//         }, 1000);
//     }
// };

// car.start();



// const car = {

//     brand: "Tesla",

//     start() {  

//         setTimeout(function(){
//             console.log(this.brand + " is starting...");
//         }.bind(car), 1000);

//     }
// };


// car.start();

// const obj = {a:12, inObj1: {f: 34, n: 55, t: 55}, inObj2: {v: 444, arr: [332, 4, 2, 1]}, g: 44}

// function Foo(name){
//     this.name = name;
// }

// function foo() {
//     return this.name;
// }

// // Foo.prototype.foo = function() {
// //     return this.name;
// // }

// const nm = new Foo("Arman");

// console.log(nm.name);
// console.log(foo.call(nm));

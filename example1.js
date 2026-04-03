// foo();
// if(undefined){
//     console.log("gd");
    
// }
// function foo(){
//     "use strict"
//      console.log(this);
//     }   


// // const o = {
// //     m: function(){
// //         let self = this;
// //         console.log(this === o);
// //         f();
// //         function f(){
// //             console.log(this);
// //             console.log(self === o);
            
// //         }
        
// //     }
// // }

// o.m();

// function foo(a, b){
//     return a + b;
// }

// console.log(globalThis.foo
// );

// let arr = [12, undefined]
// let [a, b = undefined] = arr;
// console.log(a, b)

// const obj = {

//     x:12,
//     y:34,

//     m: function(){
//         console.log(this.x);   
//     }
// }

// let res = obj.m();
// console.log(res);


// function massageTo(name, client, message){
//     return `[${name}] massage to ${client}: "message: ${message}`; 
// }


// let armanIsChat = massageTo.bind(null, "Arman");
// console.log(armanIsChat("Artak", "hello"));

// let armanToArtakChat = armanIsChat.bind(null, "Artak");
// console.log(armanToArtakChat("what are you doing?"));


// if(!(Function.prototype.bind)){
//     Function.prototype.bind = function(o){
//         const self = this;
//         const bindArgs = arguments;

//         return function(){
//             const args = [];
        
//             for(let i = 1; i < bindArgs.length; ++i) {
//                 args.push(bindArgs[i]);
//             }
//             for(let i = 0; i < arguments.length; ++i){
//                 args.push(arguments[i]);
//             }

//             return self.apply(o, args);
//         };
//     };
// }


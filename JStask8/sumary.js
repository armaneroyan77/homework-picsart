// function sum(num1, num2, num3){
//     return num1 + num2 + num3;
// }

// const array = [10, 20, 30];
// console.log(sum.apply(null, array));


// const student1 = { name: "Anna", score: 80 };
// const student2 = { name: "Mark", score: 95 };

// function printResult() {
//  console.log(this.name + " scored " + this.score);
// }

// printResult.call(student1);
// printResult.apply(student2)


// const user = {
//   name: "Alex",
//   greet() {
//     return "Hello " + this.name;
//   }
// };

// const admin = {
//   name: "Admin"

// };

// console.log(user.greet.call(admin));



// const numbers = [5, 12, 8, 20, 3];

// console.log(Math.max.apply(null, numbers));


// const obj1 = {
//  value: 10,

//  getValue() {
//    return this.value;
//  }

// };

// const obj2 = {
//  value: 50
// };


// console.log(obj1.getValue.call(obj2));



// function total(a, b, c) {
//  return a + b + c;
// }

// const args = [7, 8, 9];

// console.log(total.apply(null, args));



// function getData(){
//     return `Name: ${this.name}\nPoint: ${this.points}`;
// }

// const p1 = { name: "Anna", points: 10 };
// const p2 = { name: "Mark", points: 25 };

// console.log(getData.call(p1));
// console.log(getData.call(p2));


// function sum(a, b, c) {
//   return a + b + c;
// }


// function execute(fn, arr) {
//     return fn.apply(null,arr);
// }

// console.log(execute(sum, [2, 4, 6]));



//************************************************************************** 

// const obj = {
//     value: 100,
//     get() {
//         const inner = () => {
//           return this.value;
//         }
        
//         return inner();
//     }
// };

// console.log(obj.get());

// const obj = {
//     value: 100,
//     get() {
//         const self = this;

//         function inner(){
//           return self.value;
//         };
        
//         return inner();
//     }
// };

// console.log(obj.get());

// const obj = {

//     value: 100,

//     get() {

//         function inner(){
//           return this.value;
//         };
        
//         return inner.call(obj);
//     }
// };

// console.log(obj.get());

//*******************************************************************
 


// const obj = {

//   value: 1,

//   add(x) {
//     this.value += x;
//     return this;
//   }

// };

// console.log(obj.add(5).add(10).value);


//************************************************************************* */
// class Account{

//     constructor(usName = "", nicName = "", passwd = ""){

//         this.userFullName = usName;
//         this.nicName = nicName;
//         this.password = passwd; 
           
//     }

//     set userFullName(full_name){

//         if(!full_name){
//             return "invalid input!";
//         }

//         this._userFullName = full_name;
//     }

//     set nicName(nic_name){
//         if(!nic_name){
//             return "invalid input!";
//         }

//         this._nicName = nic_name;
//     }

//     set password(passwd){

//         if(typeof password !== "string" && password.length < 6){
//             return "password to short!";
//         }

//         this._password = passwd;
//     }
    
//     #isUser(full_name, nic_name, password){
//         return (
//             full_name === this._userFullName &&
//             nic_name === this._nicName       &&
//             password === this._password
//         );
//     }


//     signIn(full_name, nic_name, password){

//         if(this.#isUser(full_name, nic_name, password)){
//             return "sign in pass succesfully";
//         }

//         return "invalid input!";
//     }

// }

// const account = new Account();

// account.userFullName = "Joe Smit";;
// account.nicName = "joe110__";
// account._password = "joe1997by";

// const fName = "Joe Smit";
// const nName = "joe110__";
// const password = "joe1997by";

// console.log(account.signIn(fName, nName, password));

//********************************************************************* */


// const Person = [

//     {name: "Anna", age: 17},
//     {name: "John", age: 20}

// ]

// const adultPerson = Person.filter(person => person.age >= 18);
// adultPerson.forEach(p => console.log(`${p.name} is ${p.age} years old`));


/* Create a class BankAccount with _balance. Setter adds money (not replace). 
Getter returns current balance. Prevent negative deposits */

// class BankAccount{

//     constructor(){
//         this.balance = 0;
//     }

//     set balance(value){

//         if(value < 0) return "negative balance!";
//         this._balance += value;

//     }

//     get balance(){

//         return this._balance;
//     }


// }

// const bal = new BankAccount();

// bal.balance = -679;
// console.log(bal.balance);

// bal.balance = 88888;
// console.log(bal.balance);


// bal.balance = 20000;
// console.log(bal.balance);


/*
    Create a class Car with _speed. 
    Setter should not allow speed > 200.
    If exceeded → "Too fast”.
*/

// class Car{
//     constructor(speed = 0){
//         this.speed = speed;
//     }

//     set speed(value){
  
//         if(value > 200){
//             console.log("too fast!");
//             return;
//         }

//         this._speed = value;

//     }


// }

// const car1 = new Car();
// car1.speed = 900;


/* Create a class Cart with _total = 0.
   Setter adds item price to total.
   Getter returns total.
 */

// class Card{

//     constructor(total = 0){
//         this.total = total;
//     }

//     set total(value){

//         if(value < 0){
//             console.log("invalid input!");
//             return;
//         }
        
//         this._total += value;
//     }

//     get total(){
//         return this._total;
//     } 

// }

// const c1 = new Card();

// c1.total = -29000;

// console.log(c1.total);


/* Create a class Counter with _count = 0. Method increment() increases count. 
Getter returns current count  */

// class Counter{
    

//     constructor(){

//         this.count = 0;

//     }

//     set count(value){

//         this._count += value; 

//     }

//     get count(){

//         return this._count;
//     }
// }


// const c1 = new Counter();
// c1.count = 1;
// console.log(c1.count);
// c1.count = 2;
// console.log(c1.count);
// c1.count = 2;
// console.log(c1.count);


/*
    Convert all names in an array to uppercase.
    ["anna", "john"] → ["ANNA", "JOHN"]
 */

// const arr = ["anna", "john"];
// convertedArray = arr.map(e => e.toUpperCase());
// console.log(convertedArray);



/*
    Given an array of numbers, 
    return a new array where each number is doubled. 
*/

// arr = [1, 3, 5];
// doubledArr = arr.map(e => e * 2);
// console.log(doubledArr);




/* 
   Create a class Email with _email. 
   Setter should check if the value includes "@". 
   If not, print "Invalid email" 

*/

// class Email{

//     constructor(emailAddres = ""){
//         this.email = emailAddres;
//     }

//     set email(mail){
//         if(!mail.includes("@")) {
//             console.log("invalid Email!")
//             return;
//         };

//         this._email = mail;
//     }

// }

// const mail = new Email();
// mail.email = "armanEroyanmail.ru"



/*Create a class Employee with firstName and 
lastName. Create a getter fullName that returns "First Last" */

// class Employee{

//     #firstName;
//     #lastName;

//     constructor(firstName = "", lastName = ""){

//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     } 

//     get fullName(){

//         if(!this.#firstName){
//             return "empty firstname";
//         }

//         if(!this.#lastName){
//             return "empty lastname"
//         }

//         return `full name: ${this.#firstName} ${this.#lastName}`;
//     }
// }

// const person = new Employee("Spider", "Man");
// console.log(person.fullName);


// // Filter users with age ≥ 18.


// const Person = [{name: "Joe", age:17}, {name: "Katerina", age:27}, {name: "Kristina", age:22}];
// const adultPerson = Person.filter(person => person.age >= 18);
// console.log(adultPerson);


// // Return words with length > 5.

// const words = ["inherance", "breakfast", "hihi", "wow"];
// const largeWords = words.filter(word => word.length > 5);
// console.log(largeWords);


/* 
    Given an array of objects, return an array of only ages.
    [{name: "A", age: 10}, {name: "B", age: 15}] → [10, 15]

 */


// const Persons = [{name: "A", age: 10}, {name: "B", age: 15}]
// const onlyAges  = Persons.map(e => e.age);
// console.log(onlyAges);




// arr = [12, 45, 2, 5, 24, 222, 67, 9, 0, 3];
// const onlyEven = arr.filter(e => !(e % 2))
// console.log(onlyEven);


// // From users array: filter age ≥ 18, return only names.

// const Person = [{name: "Joe", age:17}, {name: "Katerina", age:27}, {name: "Kristina", age:22}];
// const adultPersons = Person.filter(person => person.age >= 18).map(person => person.name);
// console.log(adultPersons);


// /* Create a class Product with _price. Setter sets price. 
// Getter returns price with 10% discount  */

// class Product{

//     constructor(price = 0){
//         this.price = price;
//     }

//     set price(value){
//         if(value < 0) return "price must be bigger or equal 0!";

//         this._price = value;
//     }

//     get price(){
//         return (this._price - this._price * 0.1);
//     }


// }

// const pr1 = new Product();

// pr1.price = 5667;
// console.log(pr1.price);



// // Given products, return ones with price > 1000.

// const Products = [

//     {product: "phone", price: 3000},
//     {product: "laptop", price: 1100},
//     {product: "beg", price: 490},
//     {product: "book", price: 300},
    
// ]

// const expensiveProducts = Products.filter(p => p.price > 1000);
// console.log(expensiveProducts);




// /* Create a class Rectangle with _width and _height. Setters for both values.
// Getter area returns width * height  */

// class Rectangle{

//     constructor(width = 0, height = 0){

//         this.width = width;
//         this.height = height;
//     }

//     set width(value){
//         if(value < 0) return "width must be bigger than 0 or equal!";
//         this._width = value;
//     }

//     set height(value){

//         if(value < 0) return "height must be bigger than 0 or equal!";
//         this._height = value;
//     }

//     get GetRectangleArea(){
//         return this._width * this._height;
//     }
// }


// const rec = new Rectangle();
// rec._width = 45;
// rec._height = 90;
// console.log(rec.GetRectangleArea);



// // Filter even numbers and map them to their square.

// arr = [12, 45, 2, 5, 24, 222, 67, 9, 0, 3];
// const onlyEven = arr.filter(e => !(e % 2))
// console.log(onlyEven);



// class Temperature{
    

//     constructor(celsius_ = 0){

//         this.celsius = celsius_;

//     }

//     set celsius(value){

//         this._celsius = value;
//     }

//     get celsius(){

//         return (this._celsius * 9 / 5) + 32;
//     }
// }


// const t1 = new Temperature();
// t1.celsius = 23.8;
// console.log(t1.celsius);
 
function foo(){}

console.log();

const myRange = { 

    from: 1,
    to: 20,

    [Symbol.iterator](){

        let current = this.to;

        return {

            next: () => {
                if(current >= this.from) return {value: current--, done:false};
                else return {done: true};
            }

        }

    }

}

const iter = myRange[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

const arr = [...myRange];
console.log(arr);

for(let val of myRange){
    console.log(val);
}


export default class Stack {
    #capacity;
    #size;
    #buffer;
    #top;

    constructor(initialCapacity = 16) {
        this.#capacity = initialCapacity;
        this.#size = 0;
        this.#buffer = new Array(this.#capacity);
        this.#top = 0; 
    }

    isEmpty() {
        return !this.#size;
    }

    get size() {
        return this.#size;
    }

    push(elem) {
        if(this.#size === this.#capacity){
            throw new Error("Error");
        }
        this.#buffer[this.#top++] = elem;
        ++this.#size;
    }

    pop() {
        if(!this.#size){
            throw new Error("Error");
        }
        --this.#size;
        return this.#buffer[--this.#top];
    }

    clear() {
        this.#size = 0;
    }

    [Symbol.iterator]() {
        let index = 0;
        let buffer = this.#buffer;
        let size = this.#size;
        return {
            next(){
                if(index < size){
                    return {value: buffer[index++], done:false};
                }

                return {value: undefined, done:true};
            }
        }
    }
}
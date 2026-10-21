class Queue {
    #capacity;  
    #size;
    #front;
    #rear;
    #buffer;

    constructor(capacity = 4) {
        this.#front = 0;
        this.#capacity = capacity;
        this.#rear = 0;
        this.#size = 0;
        this.#buffer = new Int32Array(this.#capacity);
    }

    enqueue(elem) {
        if(this.size === this.#capacity) throw new Error("Error");
        this.#buffer[this.#rear] = elem;
        this.#rear = (this.#rear + 1) % this.#capacity; 
        this.#size++;
    }

    dequeue() {
        if(this.isEmpty()) throw new Error("queue is empty!");
        const val = this.#buffer[this.#front];
        this.#front = (this.#front + 1) % this.#capacity;
        this.#size--;
        return val;
    }


    get size() {
        return this.#size;
    }

    get_front() {
        if(this.isEmpty()) throw new Error("THE QUEUE IS EMPTY!");
        return this.#buffer[this.#front];
    }

    get_back() {
        if(this.isEmpty()) throw new Error("THE QUEUE IS EMPTY!");
        const index = (this.#rear - 1 + this.#capacity) % this.#capacity;
        return this.#buffer[index];
    }

    print() {
        for(let i = 0; i < this.#size; i++){
            let index = (this.#front + i) % this.#capacity;    
            console.log(this.#buffer[index]);
            
        }
        console.log("*******************************");
    }

    isEmpty() {
        return this.#size === 0;
    }

    [Symbol.iterator]() {
        let index = 0;
        let front = this.#front;
        let capacity = this.#capacity;
        let size = this.#size;
        let buff = this.#buffer;
        return {
            next(){
                if(index !== size){
                    let pos = (front + index) % capacity;
                    index++;
                    return {value: buff[pos], done: false};
                }

                return {value: undefined, done: true};
            }
        }
    }
}


const queue = new Queue;

queue.enqueue(54);
queue.enqueue(12);
queue.enqueue(2);
queue.enqueue(34);



queue.dequeue();
queue.enqueue(22);

// queue.print();


for(let val of queue){
    console.log(val);
}
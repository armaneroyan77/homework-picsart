class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SList {
    #size = 0;
    constructor(iterables) {
        this.head = null;
        if(iterables && typeof iterables[Symbol.iterator] === "function"){
            for(let val of iterables){
                this.push_back(val);
            }
        }
    }

    static fromArray(arr) {
        if(!Array.isArray(arr)) throw new Error("argument is not array!");
        return new SList(arr);
    }

    get size(){
        return this.#size
    }

    clear() {
        this.head = null;
        this.#size = 0;
    }

    push_back(elem) {
        const newNode = new Node(elem);
        if(this.head){
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        else{
            this.head = newNode;
        }
        ++this.#size;
    }

    push_front(elem) {
        const newNode = new Node(elem);
        if(!this.head){
            this.head = newNode;
            ++this.#size;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        ++this.#size;
    }

    pop_back() {
        if(!this.head) throw new Error("Error");
        if(this.head.next){
            let current = this.head;
            while(current.next.next){
                current = current.next;
            }
            current.next = null;;
        }else{
            this.head = null;
        }
        --this.#size;
    }

    pop_front() {
        if(!this.head) return null;
        const tmp = this.head;
        this.head = this.head.next;
        --this.#size;
        return tmp;
    }

    toArray() {
        const arr = [];
        for(let val of this){
            arr.push(val);
        }
        return arr;
    }

    front() {
        if(!this.head) throw new Error("list is empty");
        return this.head.data;
    }

    isEmpty() {
        return !this.size;
    }

    at(index) {
        if(!Number.isInteger(index) || index < 0 || index >= this.#size || !this.head) {
            throw new Error("Error");
        }

        let current = this.head;
        for(let i = 0; i < index; ++i){
            current = current.next;
        }

        return current;
    }

   insert(index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.#size) {
        throw new Error("Error");
    }

    const newNode = new Node(value);

    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let current = this.head;

        for (let i = 0; i < index - 1; ++i) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    ++this.#size;
}

    erase(index) {
        if(!Number.isInteger(index) || index < 0 || index >= this.#size || !this.head) {
            throw new Error("Error");
        }
        if(!index){
            this.head = this.head.next;
            --this.#size;
            return;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; ++i){
            current = current.next;
        }

        current.next = current.next.next;
        --this.#size;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    merge(list) {
        const dummy = new Node(null);
        let current = dummy;
        let left = list.head;
        let right = this.head;
        this.#size = 0;

        while (left && right) {
            if (left.data <= right.data) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }

            current = current.next;
            this.#size++;
        }

        current.next = left || right;

        while (current.next) {
            current = current.next;
            this.#size++;
        }

        this.head = dummy.next;
        return this;
    }

    remove(value) {
        if(!this.head) throw new Error("Error");
        if(value === this.head.data){
            this.head = this.head.next;
            --this.#size;
            return;
        }

        let current = this.head;
        while( current.next && current.next.data !== value){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next;
            --this.#size;
        }
    }

    sort(cmp) {
        cmp = (typeof cmp === "function")? cmp: (a, b) => a - b;
        function mergeSort(list) {
            if(!list || !list.next) return list;
            let fast = list.next;
            let slow = list;

            while(fast && fast.next){
                slow = slow.next
                fast = fast.next.next;
            }

            let middle = slow.next
            slow.next = null;
            const left = mergeSort(list);
            const right = mergeSort(middle);

            return merge(left, right, cmp);
        }
        function merge(left, right, cmp) {
            const dummy = new Node(null);
            let current = dummy;

            while(left && right){
                if(cmp(left.data, right.data) <= 0){
                    current.next = left;
                    left = left.next
                }
                else{
                    current.next = right;
                    right = right.next;
                }
                current = current.next;
            }

            current.next = left || right;

            return dummy.next;
        }

        this.head = mergeSort(this.head);
    }


    [Symbol.iterator]() {
        return {
            current: this.head,
            next(){
                while(this.current){
                    const tmp = this.current;
                    this.current = this.current.next;
                    return {value: tmp.data, done: false};
                }

                return {value: null, done: true};
            }
        }
    }
}


const list = new SList([5, 2, 34, 2, 0]);
list.sort((a, b) => a - b);

for(let val of list){
    console.log(val);
}


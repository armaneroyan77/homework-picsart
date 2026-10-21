class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DList {
    #size = 0;
    constructor(iterables) {
        this.head = null;
        this.tail = null;
        if(iterables && typeof iterables[Symbol.iterator] === "function"){
            for(let val of iterables){
                this.push_back(val);
            }
        }
    }

    static fromArray(arr) {
        if(!Array.isArray(arr)) throw new Error("argument is not array!");
        return new DList(arr);
    }

    get size() {
        return this.#size;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.#size = 0;
    }

    push_back(elem) {
        const newNode = new Node(elem);
        if(this.head){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        else{
            this.head = newNode;
            this.tail = newNode;
        }
        ++this.#size;
    }

    push_front(elem) {
        const newNode = new Node(elem);
        if(this.head){
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }else{
            this.head = newNode;
            this.tail = newNode;
        }

        ++this.#size;
    }

    pop_back() {
        if(!this.tail) throw new Error("Empty Double list");
        if(this.tail === this.head){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        --this.#size;
    }

    pop_front() {
        if(!this.head) throw new Error("Empty Double list");
        if(this.tail === this.head){
            this.tail = null;
            this.head = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        --this.#size;
    }

    toArray() {
        const res = [];
        for(let val of this){
            res.push(val);
        }
        return res;
    }

    front() {
        if(this.isEmpty()) throw new Error("List is Empty");
        return this.head.data;
    }

    back() {
        if(this.isEmpty()) throw new Error("List is Empty");
        return this.tail.data;
    }

    isEmpty() {
        return !this.#size;
    }

    at(index) {
        if(!Number.isInteger(index) || index < 0 || index >= this.#size || !this.head) {
            throw new Error("Error");
        }

        const middleIndex = Math.floor(this.#size / 2);
        if(index <= middleIndex){
            let current = this.head;
            for(let i = 0; i < index; ++i){
                current = current.next;
            }
            return current;
        }else{
            let current = this.tail;
            let size = this.#size - index - 1;
            for(let i = 0; i < size; ++i){
                current = current.prev;
            }
            return current;
        }
    }

    insert(index, value) {
        if(!Number.isInteger(index) || index < 0 || index > this.#size) {
            throw new Error("Error");
        }

        const newNode = new Node(value);

        if(!index){
            this.push_front(value);
            return;
        }

        if(index === this.#size) {
            this.push_back(value);
            return;
        }

        const middleIndex = Math.floor(this.#size / 2);
        if(index <= middleIndex){
            let current = this.head;
            for(let i = 0; i < index; ++i){
                current = current.next;
            }
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
        }else{
            let current = this.tail;
            let size = this.#size - index - 1;
            for(let i = 0; i < size; ++i){
                current = current.prev;
            }
            newNode.prev = current.prev;
            newNode.next = current;
            current.prev.next = newNode;
            current.prev = newNode;
        }

        ++this.#size;
    }

    erase(index) {

        if(!Number.isInteger(index) || index < 0 || index >= this.#size) throw new Error("Index Error!");
        if(!this.head) throw new Error("List is Empty");

        if(!index){
            this.pop_front();
            return;
        }
        if(index === this.#size - 1) {
            this.pop_back();
            return;
        }

        const middleIndex = Math.floor(this.#size / 2);
        if(index <= middleIndex){
            let current = this.head;
            for(let i = 0; i < index; ++i){
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev; 
        }else{
            let current = this.tail;
            let size = this.#size - index - 1;
            for(let i = 0; i < size; ++i){
                current = current.prev;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        --this.#size;
    }

    reverse() {
        if(!this.head || !this.head.next) return;

        let current = this.head;
        let prev = null;
        while(current){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }
    merge(list) {
        if (!list.head) return this;

        if (!this.head) {
            this.head = list.head;
            this.tail = list.tail;
            this.#size = list.#size;
            this.head.prev = null;
            return this;
        }

        const dummy = new Node(null);
        let current = dummy;
        let left = list.head;
        let right = this.head;

        this.#size = 0;

        while (left && right) {
            let node;
            if (left.data <= right.data) {
                node = left;
                left = left.next;
            } else {
                node = right;
                right = right.next;
            }

            current.next = node;
            node.prev = current === dummy ? null : current;

            current = node;
            this.#size++;
        }

        let tmp = left || right;

        while (tmp) {

            const node = tmp;
            tmp = tmp.next;
            current.next = node;
            node.prev = current === dummy ? null : current;

            current = node;
            this.#size++;
        }

        this.head = dummy.next;
        this.head.prev = null;

        this.tail = current;
        this.tail.next = null;

        return this;
    }

    remove(value) {
        if(!this.head) throw new Error("List is Empty");

        if(value === this.head.data) {
            this.pop_front();
            return true;
        }

        if(value === this.tail.data) {
            this.pop_back();
            return true;
        }

        let current = this.head;
        while(current && value !== current.data){
            current = current.next;
        }

        if(!current){
            return false;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
        --this.#size;

        return true;
    }

   sort(cmp) {
    cmp = typeof cmp === "function" ? cmp : (a, b) => a - b;

    const mergeSort = (head) => {
        if (!head || !head.next) return head;

        let slow = head;
        let fast = head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = null;
        slow.prev = null;

        const left = mergeSort(head);
        const right = mergeSort(slow);

        return merge(left, right, cmp);
    };

    const merge = (left, right, cmp) => {
        const dummy = new Node(null);
        let current = dummy;

        while (left && right) {
            let node = undefined;

            if (cmp(left.data, right.data) <= 0) {
                node = left;
                left = left.next;
            } else {
                node = right;
                right = right.next;
            }

            current.next = node;
            node.prev = current === dummy ? null : current;
            current = node;
        }

        let tmp = left || right;

        while (tmp) {
            const node = tmp;
            tmp = tmp.next;

            current.next = node;
            node.prev = current === dummy ? null : current;
            current = node;
        }

        current.next = null;

        return dummy.next;
    };

        this.head = mergeSort(this.head);
        this.tail = this.head;

        if (this.head) {
            this.head.prev = null;

            while (this.tail.next) {
                this.tail = this.tail.next;
            }
        }

        return this;
   }

    *[Symbol.iterator]() {
        let current = this.head;
        while(current){
            yield current.data;
            current = current.next;
        }
    }
}



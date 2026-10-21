
class DynamicArray {
   #arr;
   #size;
   #capacity;
   #GROWTH = 2;

   constructor(cap) {
       if (cap <= 0 || !Number.isInteger(cap)) {
           throw new Error("Error");
       }

       this.#arr = new Uint32Array(cap);
       this.#capacity = cap;
       this.#size = 0;
   }

   #resize() {
       const newCap = this.#capacity * this.#GROWTH;
       const tmp = new Uint32Array(newCap);

       for (let i = 0; i < this.#size; ++i) {
           tmp[i] = this.#arr[i];
       }

       this.#capacity = newCap;
       this.#arr = tmp;
   }

   push_back(elem) {
       if (this.#size === this.#capacity) {
           this.#resize();
       }

       if (!Number.isInteger(elem)) {
           throw new Error("Error");
       }

       this.#arr[this.#size++] = elem;
   }

   pop_back() {
       if (!this.#size) {
           throw new Error("error");
       }

       return this.#arr[--this.#size];
   }

   at(index) {
       if (!Number.isInteger(index) || index < 0 || index >= this.#size) {
           throw new Error("Error");
       }

       return this.#arr[index];
   }

   set(index, value) {
       if (
           !Number.isInteger(index) ||
           index < 0 ||
           index >= this.#size ||
           !Number.isInteger(value)
       ) {
           throw new Error("Error");
       }

       this.#arr[index] = value;

       return value;
   }

   front() {
        if(!this.#size) throw new Error("array is empty!");
        return this.#arr[0];
   }

   back() {
        if(!this.#size) throw new Error("array is empty!");
        return this.#arr[this.#size - 1];
   }

   erase(pos) {
        if(Number.isInteger(pos) || pos < 0 || pos >= this.#size) throw new Error("Error");
        for(let index = pos; index < this.#size; ++index){
            this.#arr[index] = this.#arr[index + 1];
        }
        --this.#size;
   }

   insert(pos, value) {
       if (!Number.isInteger(pos) || pos < 0 || pos >= this.#size) {
           throw new Error("Error");
       }

       if (this.#size === this.#capacity) {
           this.#resize();
       }

       for (let i = this.#size; i > pos; --i) {
           this.#arr[i] = this.#arr[i - 1];
       }

       this.#arr[pos] = value;
       this.#size++;

       return pos;
   }

   swap(i, j) {
    if(!Number.isInteger(i) || !Number.isInteger(j)) throw new Error("Error");
        [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]];
   }

   *values() {
        let index = 0;
        while(index < this.#size){
            yield this.#arr[index++];
        }
   }

   *keys() {
        for(let index = 0; index < this.#size; ++index){
            yield index;
        }
   }

   forEach(fn) {
        for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                fn(this.#arr[index], index, this.#arr);
            }
        }
   }

    map(fn) {
        let res = [];
        for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                res.push(fn(this.#arr[index], index, this.#arr));
            }
        }
        return res;
    }

   filter(fn) {
        let res = [];
        for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                if(fn(this.#arr[index], index, this.#arr)){
                    res.push(this.#arr[index]);
                }
            }
        }
        return res;
   }

    reduce(fn, init) {
        let acc = init? init: 0;
        for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                acc = fn(acc, this.#arr[index], index, this.#arr);
            }
        }
        return acc;
    }

   some(fn) {
        for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                if(fn(this.#arr[index], index, this.#arr)){
                    return true;
                }
            }
        }

        return false;
   }

    find(fn) {
          for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                if(fn(this.#arr[index], index, this.#arr)){
                    return this.#arr[index];
                }
            }
        }
    }

   findIndex(fn) {
        for(let index = 0; index < this.#size; ++index){
            if(index in this.#arr){
                if(fn(this.#arr[index], index, this.#arr)){
                    return index;
                }
            }
        }
        return -1;
   }

   includes(value) {
     for(let index = 0; index < this.#size; ++index){
            if(value === this.#arr[index]) return true;
       }

       return false;
   }


   [Symbol.iterator]() {
        let size = this.#size;
        let buffer = this.#arr;
        let index = 0;

        return {
            next(){
                if(index < size){
                    return {value: buffer[index++], done: false};
                }
                return {value: undefined, done: true};
            }
        }
   }
}




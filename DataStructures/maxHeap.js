class MaxHeap{

    constructor(heap){

        this.heap = heap? heap: [];
        if(this.heap.length > 0) this.createMaxHeap();
    }
    
    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMax(){
        this.swap(0, this.heap.length - 1);
        const max = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    peak(){
        return this.heap[0];
    }

    heapifyDown(i, size = this.heap.length){
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if(left < size && this.heap[left] > this.heap[largest]) largest = left;
        if(right < size && this.heap[right] > this.heap[largest]) largest = right;
        if(i != largest){
            this.swap(largest, i);
            this.heapifyDown(largest, size);
        }
    }

    heapifyUp(i){
        if(!i) return;
        let current = i;
        let parent = Math.floor((i - 1) / 2);
        if(this.heap[current] > this.heap[parent]){
            this.swap(current, parent);
            this.heapifyUp(parent);
        }
    }

    createMaxHeap(){
        const parSz = Math.floor(this.heap.length / 2) - 1;
        for(let i = parSz; i >= 0; --i){
            this.heapifyDown(i);
        }
    }

    getheap(){
        return this.heap;
    }

    heapSort(){
        const size = this.heap.length;
        for(let i = size - 1; i > 0; --i){
            this.swap(0, i);
            this.heapifyDown(0, i);
        }
    }
}


const nums = [12, 3, 53, 5, 2, 7, 42, 1];
const heap = new MaxHeap(nums);
console.log(heap.getheap());

heap.insert(21);
console.log(heap.getheap());

console.log(heap.extractMax());
console.log(heap.getheap());

heap.heapSort();
console.log(heap.getheap());



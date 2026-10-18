class HeapMax{
    constructor(heap){
        this.heap = (heap)? heap: [];
    }

    get size(){
        return this.heap.length;
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.size - 1);
    }

    heapifyUp(l){
        if(!parrent) return;
        let current = l;
        let parrent = Math.floor((l - 1) / 2);
        
        if(this.heap(current) > this.heap(parrent)){
            this.swap(current, parrent);
            this.heapifyUp(parrent);
        }
    }

    heapifyDown(l){
        let largest = l;
        const left = 2 * l + 1;
        const right = 2 * l + 2;

        if(left <= this.size && this.heap[left] > this.heap[largest]){
            largest = left;
        }

        if(right <= this.size && this.heap[right] > this.heap[largest]){
            largest = right;
        }

        if(largest != l){
            this.swap(l, largest);
            this.heapifyDown(largest);
        }
    }

    extractMax(){
        this.swap(0, this.size - 1);
        const max = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

}

const heap = new HeapMax;
heap.heap = [42, 8, 18, 3, 6, 12, 4];

console.log(heap.extractMax());
console.log(heap.heap);


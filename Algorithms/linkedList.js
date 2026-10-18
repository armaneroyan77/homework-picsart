class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List{
    constructor(value){
        this.head = null;
        this.size = 0;
    }

    addNodeToEnd(value){

        if(!this.head){
            this.head = new Node(value);
            this.size++;
            return;
        }

        let root = this.head;

        while(root.next){
            root = root.next;
        }

        root.next = new Node(value);
        this.size++;
    }

    addNodeToStart(value){
        if(!this.head){
            this.head = new Node(value);
            this.size++;
            return;
        }
        const node = this.head;
        this.head = new Node(value);
        this.head.next = node;
        this.size++;
    }

    addNodeAtIndex(value, index){

        if(index > this.size || index < 0){
            throw new Error("IndexError");
        }

        if(!index){
            this.addNodeToStart(value);
            return;
        }

        let newNode = new Node(value);
        let currentNode = this.head;
        
        for(let i = 0; i < index - 1; ++i){
            currentNode = currentNode.next;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }
    

    findNode(target){

        let root = this.head;
        while(root){
            if(root.value === target){
                return true
            }
            root = root.next;
        }
        return false;
    }

    deleteNode(element){
        
        let root = this.head;
        if(root.value === element){
            this.head = this.head.next;
            this.size--;
            return true;
        }
        
        while(root){
            const findNode = root.next;
            if(findNode.value === element){
                root.next = findNode.next;
                this.size--;
                return true;
            }
            root = root.next;
        }
        return false;
    }

    *[Symbol.iterator](){
        let current = this.head;

        while(current){
            yield current.value;
            current = current.next;
        }
    }

}


const linkedList = new List;
linkedList.addNodeToEnd(23);
linkedList.addNodeToEnd(34);
linkedList.addNodeToEnd(45);
linkedList.addNodeToEnd(49);
linkedList.deleteNode(34);
linkedList.addNodeToStart(24);
linkedList.addNodeAtIndex(244, 1);

console.log(linkedList.findNode(23));

console.log(linkedList);
console.log(linkedList.size);

for(const node of linkedList){
    console.log(node);
}
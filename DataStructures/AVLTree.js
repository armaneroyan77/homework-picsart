import Queue from "./queue.js";
import Stack from "./Stack.js";

class TreeNode {
    left = null;
    right = null;
    height = 1;
    balance = 0;
    constructor(data) {
        this.data = data;
    }  
}

class AVL {

    #root = null;

    #_insert(node, value) {
        if(!node) return new TreeNode(value);

        if(value < node.data){
            node.left = this.#_insert(node.left, value);
        }

        else if(value > node.data){
            node.right = this.#_insert(node.right, value);
        }
        this.updates(node);
        return this.balance(node);
    }

    updates(node){
        const left = !node.left? 0: node.left.height;
        const right = !node.right? 0: node.right.height;
        node.height = 1 + Math.max(left, right);
        node.balance = left - right;
    }

    RotateRight(y){
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        this.updates(y);
        this.updates(x);
        return x;
    }

    RotateLeft(y){
        let x = y.right;
        let T2 = x.left;
        x.left = y;
        y.right = T2;
        this.updates(y);
        this.updates(x);
        return x;
    }

    balance(node){
        if(node.balance > 1){
            if(node.left.balance < 0){
                node.left = this.RotateLeft(node.left);
            }
            return this.RotateRight(node);
        }else if(node.balance < -1){
            if(node.right.balance > 0){
                node.right = this.RotateRight(this.right);
            }
            return this.RotateLeft(node);
        }
        return node;
    }

    #_contains(node, value) {
        if(!node) return false;

        if(value > node.data){
            return this.#_contains(node.right, value);
        }
        else if(value < node.data){
            return this.#_contains(node.left, value);
        }

        return true;

    }

    #_inorder(node, result) {
        if(!node) return;
        this.#_inorder(node.left, result);
        result.push(node.data);
        this.#_inorder(node.right, result);
    }

    #_preOrder(node, result) {
        if(!node) return;
        result.push(node.data);
        this.#_preOrder(node.left, result);
        this.#_preOrder(node.right, result);
    }

    #_postOrder(node, result) {
        if(!node) return;
        this.#_postOrder(node.left, result);
        this.#_postOrder(node.right, result);
        result.push(node.data);

    }

    #_remove(node, value) {

        if(!node) return null;

        if(value > node.data){
            node.right = this.#_remove(node.right, value);
        }

        else if(value < node.data){
            node.left = this.#_remove(node.left, value);
        }

        else{
            if(!node.left && !node.right) return null;

            if(!node.left || !node.right){
                return node.left || node.right;
            }

            let successor = this.getMin(node.right);
            node.data = successor.data;
            
            node.right = this.#_remove(node.right, successor.data);
        }

        this.updates(node);
        return this.balance(node);
    }

    getMin(node) {
        let current = node;
        while(current.left){
            current = current.left;
        }
        return current;
    }

    insertRecursive(value) {
        this.#root = this.#_insert(this.#root, value);
    }

    containsRecursive(value) {
        return this.#_contains(this.#root, value);
    }

    inOrderRecursive() {
        const result = [];
        this.#_inorder(this.#root, result);
        return result;
    }

    preOrderRecursive() {
        const result = [];
        
        this.#_preOrder(this.#root, result);
        return result;
    }
    
    postOrderRecursive() {
        const result = [];
        this.#_postOrder(this.#root, result);
        return result;
    }
    
    levelOrder(){
        if(!this.#root) throw new Error("Error");
        
        const queue = new Queue;
        queue.enqueue(this.#root);
        const res = [];
        while(!queue.isEmpty()){
            const node = queue.dequeue();
            let left = node.left;
            let right = node.right;
            if(left) queue.enqueue(left);
            if(right)queue.enqueue(right);
            res.push(node.data);
        }
        return res;
    }

    inOrderIterative(){
        const res = [];
        const stack = new Stack();
        let current = this.#root;
        let left = null;
        let right = null;

        while(current || !stack.isEmpty()){
            while(current){
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();
            res.push(current.data);
            current = current.right;
        }

        return res;
    }

    postOrderIterative(){
        const res = [];
        const stack1 = new Stack;
        stack1.push(this.#root);
        const stack2 = new Stack;

        while(stack1.size){
            let current = stack1.pop();
            stack2.push(current);
            if(current.left) stack1.push(current.left);
            if(current.right) stack1.push(current.right);
        }

        while(stack2.size){
            res.push(stack2.pop().data);
        }
        return res;
    }

    preOrderIterative(){
        const stack = new Stack;
        const res = [];
        let current = this.#root;

        while(current){
            while(current){
                res.push(current.data);
                if(current.right) stack.push(current.right);
                current = current.left;
            }

            if(!stack.isEmpty()) current = stack.pop();
        }
        return res;
    }
    
    removeRecursive(value) {
        this.#root = this.#_remove(this.#root, value);
    }

    contains(value) {
        let current = this.#root;

        while(true){
            if(!current) return false;

            if(value < current.data){
                current = current.left;
            }
            else if(value > current.data){
                current = current.right;
            }

            else{                
                return true;
            }
        }
    }

}


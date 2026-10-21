class TreeNode {
    left = null;
    ight = null;
    constructor(data) {
        this.data = data;
    }  
}


class BST {

    #root = null;

    #_insert(node, value) {
        if(!node) return new TreeNode(value);

        if(value < node.data){
            node.left = this.#_insert(node.left, value);
        }

        else if(value > node.data){
            node.right = this.#_insert(node.right, value);
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

    _postOrder(node, result) {
        if(!node) return;
        this.#_inorder(node.left, result);
        this.#_inorder(node.right, result);
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
                return (node.left)? node.left: node.right;
            }

            let successor = this.getMin(node.right);
            node.data = successor.data;
            
            this.#_remove(node.right, successor.data);
        }

        return node;
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
        this._postOrder(this.#root, result);
        return result;
    }

    removeRecursive(value) {
        this.#root = this.#_remove(this.#root, value);
    }

    insert(value) {
        if(!this.#root){
            this.#root = new TreeNode(value);
            return;
        };

        const newNode = new TreeNode(value);
        
        let prev =  null;
        let current = this.#root;

        while(current){
            prev = current;
            if(value > current.data) current = current.right;
            else if(value < current.data) current = current.left;
        }

        if(value < prev.data){
            prev.left = newNode;
        }

        else if(value > prev.data){
            prev.right = newNode;
        }

        return;
      
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


const bst = new BST;

bst.insert(12);
bst.insert(2);
bst.insert(4);
bst.insert(45);
bst.insert(32);



console.log(bst.inOrderRecursive());
bst.removeRecursive(32);
console.log(bst.inOrderRecursive());

console.log(bst.contains(45));






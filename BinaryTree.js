const TreeNode = require('./TreeNode');
const Stack = require('./Stack');
const root = Symbol("root");

class BinaryTree {
    construtor(){
        this[root] = null;
    }

    insert(data){
        let oNode = new TreeNode(data);
        if(this[root] == null){
            this[root] = oNode;
            return;
        }
        this.insertNode(this[root], oNode);
    }

    insertNode(node, newNode){
        let q = [], temp;
        q.unshift(node);

        while (q.length > 0) {
            temp = q.pop();
            if (temp.left == null) {
                temp.left = newNode;
                break;
            } else
                q.unshift(temp.left);

            if (temp.right == null) {
                temp.right = newNode;
                break;
            } else
                q.unshift(temp.right);
        }
    }

    inorder(temp){
        if (temp == null) 
            return; 
        this.inorder(temp.left);
        process.stdout.write(`${temp.data},`);
        this.inorder(temp.right); 
    }

    preorder(temp){
        if (temp == null) 
            return;
        process.stdout.write(`${temp.data},`);
        this.preorder(temp.left);
        this.preorder(temp.right); 
    }

    preorderWithStack(temp){
        let treeStack = new Stack();
        let ptr = temp;
        while(ptr != null){
            process.stdout.write(`${ptr.data},`);
            if(ptr.right != null){
                treeStack.push(ptr.right);
            }
            if(ptr.left !=null){
                ptr = ptr.left;
            } else {
                ptr = treeStack.pop();
            }
        }

    }

    postorder(temp){
        if (temp == null) 
            return;
        this.postorder(temp.left);
        this.postorder(temp.right);
        process.stdout.write(`${temp.data},`);
    }
}

let btree = new BinaryTree();
btree.insert(10);
btree.insert(11);
btree.insert(7);
btree.insert(9);
btree.insert(15);
btree.insert(8);
console.log("\nPreorder :");
btree.preorder(btree[root]);
console.log("\nPreorder with stack:");
btree.preorderWithStack(btree[root]);
console.log("\nInorder :");
btree.inorder(btree[root]);
console.log("\nPostorder :");
btree.postorder(btree[root]);


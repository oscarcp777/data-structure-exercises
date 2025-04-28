namespace Tree {
    export class Node {
        public right: Node | null = null;
        public left: Node | null = null;
        constructor(public value: any) {}

        serialize() {
            const ans:any = { value: this.value };
            ans.left = this.left === null ? null : this.left.serialize();
            ans.right = this.right === null ? null : this.right.serialize();
            return ans;
          }
    }
}
class BinaryTree {
    public root: Tree.Node | null = null
    constructor() {}
    add(value: any) {
        if (!this.root) {
            this.root = new Tree.Node(value);
        }else{
            let node = this. root;
            while (true) {
                if(node.value > value){
                    if(node.left){
                        node = node.left;
                    }else{
                        node.left = new Tree.Node(value);
                        break;
                    }
                }else {
                    if(node.right){
                        node = node.right;
                    }else{
                        node.right = new Tree.Node(value);
                        break;
                    }
                }
            }
        }
    }
    inOrder(node: Tree.Node|null,callback :Function){
        if(node){
            this.inOrder(node.left,callback);
            callback.call(this,node)
            this.inOrder(node.right,callback);
        }
    }
    preOrder(node: Tree.Node|null,callback :Function){
        if(node){
            callback.call(this,node)
            this.preOrder(node.left,callback);
            this.preOrder(node.right,callback);
        }
    }
    postOrder(node: Tree.Node|null,callback :Function){
        if(node){
            this.postOrder(node.left,callback);
            this.postOrder(node.right,callback);
            callback.call(this,node)
        }
    }

    height(node: Tree.Node|null ): number {
        if (!node) {
            return 0
        }else {
            return Math.max(this.height(node.left),
                            this.height(node.right)) + 1
        }
    }
    getHeight(){
        return this.height(this.root)
    }
    traverseDepthFirst(callback: Function, type: string = 'inOrder'){
      const traverses: any = {
        inOrder:this.inOrder,
        postOrder:this.postOrder,
        preOrder:this.preOrder
      }
      traverses[type].call(this,this.root,callback)
    }
    traverseBreadthFirst(callback: Function){
     const queue = [this.root]
     while(queue.length){
         const node: any = queue.shift();
         if(node.left){
             queue.push(node.left)
         }
         if(node.right){
            queue.push(node.right)
        }
        callback.call(this,node)
     }
    }
    traverseLineByLine(){
        const queue = [this.root]
        while(true){
            let size = queue.length
            const print :Array<number> = []
            if(size === 0){
                break;
            }
            while (size > 0) {
                const node: any = queue.shift();
                print.push(node.value)
                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){
                    queue.push(node.right)
                }
                size--
            }
            console.log(print.join(' '));
        }
       }
    size(){
        let counter = 0;
        this.traverseBreadthFirst(()=>{counter++})
        return counter
    }
    toArray(){
        const list:Array<number> = []
        this.traverseBreadthFirst((node: Tree.Node)=>{list.push(node.value)})
        return list
    }
    isLeave(node: Tree.Node){
        return !node.left && !node.right;
    }
    getSumOfAllLeftLeaves() {
        const list = []
        const queue = [this.root]
        while (queue.length) {
            const node: any = queue.shift();
            if (node.left) {
                queue.push(node.left)
                if(this.isLeave(node.left)){
                    list.push(node.left.value)
                }
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        console.log(list);
        return list.reduce((a,b)=>(a+b),0)
    }
    toObject() {
        return this.root.serialize();
    }
}
export default BinaryTree
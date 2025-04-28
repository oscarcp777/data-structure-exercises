class Node {
    public left : Node | null ;
    public right : Node | null;
    constructor(public value: any) {
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    root: Node  | null;
    constructor(){
        this.root = null
    }
    insert(node: Node, current: Node){
        if(node.value < current.value){
            if (current.left === null) {
                current.left = node
            } else {
                this.insert(node, current.left)
            }
        }else if (node.value > current.value) {
            if (current.right === null) {
                current.right = node
            } else {
                this.insert(node, current.right)
            }
        }

    }
    add(value: any){
       let node = new Node(value)
       if (this.root === null) {
          this.root = node
       } else {
           this.insert(node,this.root)
       }
    }
    contains (value: any) {
        return this.findValue(value, this.root)
    }
    findValue (value: any , current: Node | null ): boolean {
        if (current === null) {
          return false;
        }
        if (value < current.value) {
          return this.findValue(value, current.left);
        } else if (value > current.value) {
          return this.findValue(value, current.right);
        } else {
          return true;
        }
    }
    findValues(value: any ,current: Node  | null ,parent: Node  | null): any {
        if (current === null) {
          return null;
        }
        if (value < current.value) {
          return this.findValues(value, current.left, current);
        } else if (value > current.value) {
          return this.findValues(value, current.right, current);
        } else {
          return {
            current,
            parent
          }
        }
    }
    remove (value: any) {
        var replacement = null,
            replacementParent = null;
      
        var values = this.findValues(value, this.root, null);
      
        if (values !== null) {
          var childCount = (values.current.left !== null ? 1 : 0) + (values.current.right !== null ? 1 : 0);
      
          if (values.current === this.root) {
            switch (childCount) {
              case 0:
                this.root = null;
                break;
              case 1:
                this.root = (values.current.right === null ? values.current.left : values.current.right)
                break;
              case 2:
                replacement = this.root.left;
    
                while(replacement.right !== null) {
                  replacementParent = replacement;
                  replacement = replacement.right;
                }
    
                if (replacementParent !== null) {
                  replacementParent.right = replacement.left;
                  replacement.right = this.root.right;
                  replacement.left = this.root.left;
                } else {
                  replacement.right = this.root.right;
                }
    
                this.root = replacement;
    
            }
          } else {
            switch (childCount) {
                case 0:
                  if (values.current.value < values.parent.value) {
                    values.parent.left = null;
                  } else {
                    values.parent.right = null;
                  }
                  break;
                case 1:
                  if (values.current.value < values.parent.value) {
                    values.parent.left = (values.current.left === null ? values.current.right : values.current.left);
                  } else {
                    values.parent.right = (values.current.left === null ? values.current.right : values.current.left);
                  }
                  break;
          
                case 2:
                  replacement = values.current.left
                  replacementParent = values.current;
          
                  while (replacement.right !== null) {
                    replacementParent = replacement;
                    replacement = replacement.right;
                  }
          
                  replacementParent.right = replacement.left;
          
                  replacement.right = values.current.right;
                  replacement.left = values.current.left;
          
                  if (values.current.value < parent.value) {
                    values.parent.left = replacement;
                  } else {
                    values.parent.right = replacement;
                  }
              }
          }
        }
    }
    preOrder(node: Node,callback: Function){
        if (node) {
            callback.call(this,node);
            this.inOrder(node.left,callback)
            this.inOrder(node.right,callback)
        }
    }
    postOrder(node: Node,callback: Function){
        if (node) {
            this.inOrder(node.left,callback)
            this.inOrder(node.right,callback)
            callback.call(this,node);
        }
    }
    inOrder(node: Node,callback: Function){
        if (node) {
            this.inOrder(node.left,callback)
            callback.call(this,node);
            this.inOrder(node.right,callback)
        }
    }
    traverse(callback: Function, type = 'inOrder'){
        switch (type) {
            case 'inOrder':
                return this.inOrder(this.root,callback);
            case 'preOrder':
                return this.preOrder(this.root,callback);
            case 'postOrder':
                return this.postOrder(this.root,callback);
            default:
                return this.inOrder(this.root,callback)
        }
    }
    size(){
        let length = 0
        this.traverse(()=>{
            length++
        })
        return length
    }
    toArray(){
        let result : any [] = []
        this.traverse((node: Node)=>{
            result.push(node.value)
        })
        return result
    }
    toString(){
        return this.toArray().toString();
    }
    
}
export default BinarySearchTree
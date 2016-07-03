let cl = (input) => console.log(input); 

class binarySearchTree{
	constructor(){
		this.root = null;
	}
	isEmpty(){
		return this.root === null;
	}
	add(val){
		let newNode = {
			value: val,
			right: null,
			left: null
		};
		if(this.isEmpty()){
			this.root = newNode;
		}
		else{
			var current = this.root;
			while(true){
				if(current.value < val){
					if(current.right === null){
						current.right = newNode;
						break;
					}
					else{
						current = current.right;
					}
				}
				else if(current.value > val){
					if(current.left === null){
						current.left = newNode;
						break;
					}
					else{
						current = current.left;
					}
					
				}
				else{
					return;
				}
			}
		}
	}
}

let tree = new binarySearchTree();
tree.add(45);
tree.add(50);
tree.add(30);
tree.add(60);
tree.add(47);
tree.add(38);
tree.add(49);
tree.add(95);
tree.add(17);
tree.add(25);
tree.add(19);
tree.add(27);
tree.add(26);











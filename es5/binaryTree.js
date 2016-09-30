/* Binary search tree algorithm */

var other=[];

function Bst(){
	this.head=null;
	this.output=[];
}

Bst.prototype.isEmpty=function(){
	return this.head===null;
};

Bst.prototype.size=function(){
	// in the append method each new node is being pushed into the output array
	return this.output.length;
};

Bst.prototype.contains=function(val){
	// the output array contains the value of each node
	return this.output.indexOf(val)>-1;
}

Bst.prototype.append=function(val){
	var newNode={
		left:null,
		data:val,
		right:null
	};
	if(this.isEmpty()){
		this.head=newNode;
		this.output.push(this.head.data);
	}
	else{
		var current=this.head;
		while(current){
			if(current.data>val){
				if(current.left===null){
					current.left=newNode;
					this.output.push(current.left.data);
					current=null;
				}
				else{
					current=current.left;
				}
			}
			else if(current.data<val){
				if(current.right===null){
					current.right=newNode;
					this.output.push(current.right.data);
					current=null;
				}
				else{
					current=current.right;
				}
			}
		}
	}
};

Bst.prototype.remove=function(val){
	var found = false;
	var current = this.head;
	var parent = null;
	while(!found && current){
		if(val<current.data){
			parent = current;
			current = current.left;
		}
		else if(val>current.data){
			parent = current;
			current = current.right;
		}
		else{
			found = true;
		}
	}
	if(found){

	}
};

Bst.prototype.print=function(){
	console.log(this.output.sort(function(a,b){
		return a-b;
	}));
};

Bst.prototype.inOrder=function(node){
	if(node){
		this.inOrder(node.left);
		other.push(node.data);
		this.inOrder(node.right);
	}
};


var tree = new Bst();
tree.append(50).append(30).append(20).append(70).append(90).append(120).print();



// tree.inOrder(tree.head);
// tree.print();
// console.log(other);

// tree.print();
//console.log(tree.remove(10));
// tree.print();













/* Binary search tree algorithm */

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
	
};

Bst.prototype.print=function(){
	console.log(this.output.sort(function(a,b){
		return a-b;
	}));
};


var tree = new Bst();
tree.append(50);
tree.append(30);
tree.append(20);
tree.append(70);
tree.append(90);
tree.append(120);

tree.print();





//console.log(tree.head);




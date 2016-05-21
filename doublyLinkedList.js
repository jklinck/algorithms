//Doubly linked list algorithm

function linkedList(){
	this.head=null;
}

var check=function(){
	console.log(this.head.data);
};

linkedList.prototype.isEmpty=function(){
	return this.head===null;
};

linkedList.prototype.size=function(){
	var count=0;
	if(this.isEmpty()){
		console.log(count);
	}
	else{
		var current=this.head;
		while(current){
			count++;
			current=current.next;
		}
		console.log(count);
	}
};

linkedList.prototype.append=function(val){
	var newNode={
		prev:null,
		data:val,
		next:null
	};
	if(this.isEmpty()){
		this.head=newNode;
	}
	else{
		var previous=null;
		var current=this.head;
		while(current.next){
			previous=current;
			current=current.next;
		}
		current.next=newNode;
		current.next.prev=current;
	}
};

linkedList.prototype.prepend=function(val){
	var newNode={
		prev:null,
		data:val,
		next:null
	};
	if(this.isEmpty()){
		this.head=newNode;
	}
	else{
		var nextNode=this.head;
		this.head=newNode;
		this.head.next=nextNode;
		nextNode.prev=this.head;
	}
};

linkedList.prototype.contains=function(val){
	if(this.isEmpty()){
		return false;
	}
	else{
		var current=this.head;
		while(current){
			if(current.data===val){
				return true;
			}
			current=current.next;
		}
	}
	return false;
};

linkedList.prototype.remove=function(val){
	if(this.isEmpty()){
		return;
	}
	else{
		if(this.contains(val)){
			var current=this.head;
			if(this.head.data===val){
				this.head.next.prev=null;
				this.head=current.next;
			}
			else{
				current=current.next;
				while(current){
					if(current.data===val){
						var previous=current.prev;
						current.prev.next=current.next;
						current.next.prev=previous;
					}
					current=current.next;
				}
			}
		}
		return;
	}
};

linkedList.prototype.print=function(){
	var output=[];
	if(this.isEmpty()){
		console.log(output);
	}
	else{
		var current=this.head;
		while(current){
			output.push(current.data);
			current=current.next;
		}
		console.log(output);
	}
};

var list=new linkedList();

list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.prepend(3);
list.print();
list.remove(7);
list.print();

// everything is working except the remove function when trying to remove the last node








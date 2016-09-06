/*
Circular doubly linked list in javascript. In a ciruclar linked list the last node in the list points to this.head 
as its next. In the case of a list with only one node, this.head both points back to itself from its previous and points 
forward to itself with its next.
*/

"use strict";

function Circ(){
	this.head=null;
}

Circ.prototype.isEmpty=function(){
	return this.head===null;
};

Circ.prototype.size=function(){
	var size=0;
	if(this.isEmpty()){
		return size;
	}
	else{
		size=1;
		var current=this.head;
		if(current.next==this.head){
			return size;
		}
		while(current.next!==this.head){
			size++;
			current=current.next;
		}
		return size;
	}
};

Circ.prototype.contains=function(val){
	if(this.isEmpty()){
		return false;
	}
	else{
		var current=this.head;
		if(current.data==val){
			return true;
		}
		while(current.next!==this.head){
			if(current.data==val){
				return true;
			}
			current=current.next;
		}
		if(current.next===this.head && current.data==val){
			return true;
		}
		return false;
	}
};

Circ.prototype.prepend=function(val){
	var newNode={
		prev:this.head,
		data:val,
		next:this.head
	};
	if(this.isEmpty()){
		this.head=newNode;
	}
	var current=this.head;
	while(true){
		if(current.next==this.head){
			current.next=newNode;
			this.head=newNode;
			this.head.next.prev=newNode;
			break;
		}
		current=current.next;
	}
};

Circ.prototype.append=function(val){
	var newNode={
		prev:null,
		data:val,
		next:null
	};
	if(this.isEmpty()){
		this.head=newNode;
		this.head.next=this.head;
		this.head.prev=this.head;
	}
	else{
		var current=this.head;
		var previous;
		while(current.next!==this.head){
			previous=current;
			current=current.next;
		}
		current.next=newNode;
		current.next.prev=current;
		current.next.next=this.head;
	}
};

Circ.prototype.remove=function(){
	
};

Circ.prototype.print=function(){
	var output=[];
	if(this.isEmpty()){
		console.log(output);
	}
	else{
		output.push(this.head.data);
		var current=this.head;
		while(this.size()>1 && current.next!==this.head){
			current=current.next;
			output.push(current.data);
		}
		console.log(output);
	}
};




var list=new Circ();
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.prepend(4);
list.append(9);
list.prepend(3);

list.print();




/*
FUNCTIONS THAT ARE WORKING PROPERLY

isEmpty
size
contains
append 
print


NOT WORKING YET
remove

*/
























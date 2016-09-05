/*
Circular doubly linked list in javascript. In a ciruclar linked list the last node in the list points to this.head as it's next. In the case of a list with only one node, it both points back to itself from it's previous and points forward to itself with it's next.
*/

"use strict";

function Ll(){
	this.head=null;
}

Ll.prototype.isEmpty=function(){
	return this.head===null;
};

Ll.prototype.size=function(){
	var size=0;
	if(this.isEmpty()){
		return size;
	}
	else{
		var current=this.head;
		while(current){
			size++;
			current=current.next;
		}
		return size;
	}
};

Ll.prototype.contains=function(val){
	if(this.isEmpty()){
		return false;
	}
	else{
		var current=this.head;
		while(current){
			if(current.data==val){
				return true;
			}
			current=current.next;
		}
		return false;
	}
};

Ll.prototype.prepend=function(val){
	var newNode={
		prev:null,
		data:val,
		next:null
	};
	var current=this.head;
	this.head=newNode;
	this.head.next=current;
	current.prev=newNode;
};

Ll.prototype.append=function(val){
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
		while(current.next && current.next!==this.head){
			previous=current;
			current=current.next;
		}
		current.next=newNode;
		current.next.prev=current;
		current.next.next=this.head;
	}
};

Ll.prototype.remove=function(){
	
};

Ll.prototype.print=function(){
	var output=[];
	if(this.isEmpty()){
		console.log(output);
	}
	else{
		var current=this.head;
			if(current.next===this.head){
				output.push(current.data);
				console.log(output);
				return;
			}
			while(current.next!==this.head){
				output.push(current.data);
				current=current.next;
			}
			//console.log(output);
	}
};




var list=new Ll();
list.isEmpty();
list.append(5);
list.append(6);
// list.append(7);
// list.append(8);
// list.append(9);
// list.prepend(4);
list.print();

//console.log(list.head.next.next.data);






















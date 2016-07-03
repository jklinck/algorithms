//Singly linked list
function linkedList(){
	this.head = null;
}

// check if a list is empty
linkedList.prototype.isEmpty = function(){
	return this.head === null;
};

// append a node to the end of the list
linkedList.prototype.add = function(val){
	var newNode = {
		data: val,
		next: null
	};
	if(this.isEmpty()){
		this.head = newNode;
	}else{
		var current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = newNode;
	}
};

// print out the linked list
linkedList.prototype.print = function(){
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

linkedList.prototype.size=function(){
	var count=0;
	if(this.isEmpty()){
		console.log(count);
	}
	else{
		var current=this.head
		while(current){
			count++;
			current=current.next;
		}
		console.log(count);
	}
};

// check if the list contains a value
linkedList.prototype.contains=function(val){
	if(this.isEmpty()){
		return false;
	}
	var current=this.head;
	while(current){
		if(current.data===val){
			return true;
		}
		current=current.next;
	}
	return false;//is this line really needed?
};

// remove a node from the list
linkedList.prototype.remove=function(val){
	if(!this.contains(val)){
	    return;
}
var current=this.head;
var nodeToBeRemoved;
// if(current.data===val){
//     nodeToBeRemoved=current;
//     this.head=nodeToBeRemoved.next;
//     nodeToBeRemoved.next=null;
// }
// else{
    var previous=null;
    while(current.data!==val){
        previous=current;
        current=current.next;
    }
    nodeToBeRemoved=current;
    previous.next=current.next;
//}
return nodeToBeRemoved;
};


// create the new instance of a linkedList()
var list = new linkedList();

// append new nodes
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);

//run methods
list.size();//5
list.print();//[5,6,7,8,9]
console.log(list.contains(12)); //false
console.log(list.contains(9)); //true
console.log(list.contains(8)); //true
list.remove(6);
list.remove(8);
list.print();//[5,7,9]

	
let cl = (input) => console.log(input);

class linkedList{
	constructor(){
		this.head = null;
	}
	isEmpty(){
		return this.head === null;
	}
	// size of list
	size(){
		var count = 0;
		if(this.isEmpty()){
			return count;
		}
		else{
			var current = this.head;
			while(current){
				count++;
				current = current.next;
			}
		}
		return count;
	}
	// append a node
	append(val){
		let node = {
			data : val,
			next : null
		};
		if(this.isEmpty()){
			this.head = node;
		}
		else{
			let current = this.head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
	} 
	// prepend a node
	prepend(val){
		let node = {
			data: val,
			next:null
		};
		if(this.isEmpty()){
			this.head = node;
		}
		else{
			var current = this.head;
			this.head = node;
			this.head.next = current;
		}
	}
	// print the linkedList
	print(){
		let output = [];
		if(this.isEmpty()){
			cl(output);
		}
		let current = this.head;
		while(current){
			output.push(current.data);
			current = current.next;
		}
		cl(output);
	} 
} // end of class linkedList


const link = new linkedList();
link.append(5);
link.append(6);
link.append(7);
link.prepend(4);
link.print();









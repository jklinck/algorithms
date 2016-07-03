class linkedList{
	constructor(){
		this.head = null;
	}
	isEmpty(){
		return this.head === null;
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

	// print the linkedList
	print(){
		let output = [];
		if(this.isEmpty()){
			console.log(output);
		}
		let current = this.head;
		while(current){
			output.push(current.data);
			current = current.next;
		}
		console.log(output);
	} 

} // end of class linkedList


const link = new linkedList();
link.append(5);
link.append(6);
link.append(7);
link.print();







//Doubly linked list algorithm
<script>
function dbList(){
	this.head=null;
}

dbList.prototype.isEmpty=function(){
	return this.head===null;
};

dbList.prototype.append=function(val){
	var newNode={
		prev:null,
		data:val,
		next:null
	};
	if(this.isEmpty()){
		this.head=newNode;
	}
	else{
		var current=this.head;
		while(current.next){
			var temp=current;
			current=current.next;
			current.prev=temp;
		}
		var temp2=current;
		current.next=newNode;
		current.next.prev=temp2;
	}
};

dbList.prototype.print=function(){
	var output=[];
	if(this.isEmpty()){
		console.log(output);
		return;
	}
	else{
		var current=this.head;
		while(current){
			output.push(current.data);
			current=current.next
		}
		console.log(output);
	}
};

var list= new dbList();
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.print();
console.log(list);

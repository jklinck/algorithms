
function linkedList(){
	this.head=null;
	this.count=0;
}

/*how many nodes there are*/
linkedList.prototype.size=function(){
	return this.count;
};

/*if the list is empty*/
linkedList.prototype.isEmpty=function(){
	return this.head===null;
};

// adding a new node
linkedList.prototype.add=function(val){
  var newNode= {
    data:val,
    next:null
  };
  if(this.isEmpty()){
       this.head=newNode;
     }
  else{
    var current = this.head;
    while(current.next){
      current=current.next;
    }
    current.next=newNode;
  }
  this.count++;
};

linkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }
  var current = this.head;
  var nodeToBeRemoved;
  if (current.data === val) {
    nodeToBeRemoved = current;
    this.head = nodeToBeRemoved.next;
    nodeToBeRemoved.next = null;
  } else {
    // Keep track of the previous node
    var previous = null;
    // Traverse the list until we get to the node to be removed
    while (current.data !== val) {
      previous = current;
      current = current.next;
    }
    // Save a reference to the node we will remove so that we can return it
    nodeToBeRemoved = current;
    // After doing this, nothing will be pointing to `current` which will delete that node
    previous.next = current.next;
  }
  // Decrement the count of the list
  this.count--;
  // Return the node that we just removed
  return nodeToBeRemoved;
};


linkedList.prototype.contains = function(val) {
  if (this.isEmpty()) {
    return false;
  }
  var current = this.head;
  // Traverse through the list and check the data value in each node
  while (current) {
    if (current.data === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

linkedList.prototype.print = function() {
  if (this.isEmpty()) {
    console.log('[]');
  }
  var output = '[';
  var current = this.head;

  // Traverse through the list and add each data value to the output
  while (current) {
    output += current.data;
    if (current.next) {
      output += ', '; // Add a comma if there is a next value
    }
    current = current.next;
  }
  output += ']';
  console.log(output);
};


/*creating a new list*/
list1 = new linkedList();
list1.add(1);
list1.add(2);
list1.add(3);
list1.print();
list1.remove(2);
list1.print();
	
	

	
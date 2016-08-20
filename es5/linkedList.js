// singly linked list


function ll(){
    this.head=null;
}

ll.prototype.isEmpty=function(){
    return this.head==null;
};

ll.prototype.size=function(){
    var count=0;
    if(this.isEmpty()){
        return count;
    }
    else{
        var current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
};

ll.prototype.contains=function(val){
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

ll.prototype.prepend=function(val){
    var newNode={
        data:val,
        next:null
    };
    if(this.isEmpty()){
        this.head=newNode;
    }
    else{
        var current=this.head;
        this.head=newNode;
        this.head.next=current;
    }
};

ll.prototype.append=function(val){
    var newNode={
        data:val,
        next:null
    };
    if(this.isEmpty()){
        this.head=newNode;
    }
    else{
       var current=this.head;
       while(current.next){
           current=current.next;
       }
       current.next=newNode;
    }
};

ll.prototype.remove=function(val){
    if(this.contains(val)){
        if(this.head.data==val){
            this.head=this.head.next;
        }
        else{
            var previous=this.head;
            var current=previous.next;
            while(current){
                if(current.data==val){
                    previous.next=current.next;
                    return;
                }
                previous=current;
                current=current.next;
            }
        }
    }
    else{
        return;
    }
};

ll.prototype.print=function(){
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



var list= new ll();
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.print();
list.remove(8);
list.print();
























 



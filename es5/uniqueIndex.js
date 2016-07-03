// find the index of first non repeating letter

function uniqueIndex(str){
    var arr=[];
    var temp;
   for(var i=0;i<str.length;i++){
       arr.push(str[i]);
   }
   for(var j=0;j<arr.length;j++){
       temp=arr[j];
       arr[j]=0;
       if(!contains(arr,temp)){
           return j;
       }
       arr[j]=temp;
   }
   return "There aren't any non-repeating letters.";
} 

function contains(str,val){
    for(var i=0;i<str.length;i++){
        if(str[i]===val){
            return true;
        }
    }
    return false;
}


var x="aabbcdd";
console.log(uniqueIndex(x));  // should return 4
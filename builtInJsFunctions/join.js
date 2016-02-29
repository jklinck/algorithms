//This is a longhand version of the .join() built in JS method
<script>
function join2(x,y){
  var temp="";
  for(var i=0;i<x.length;i++){
    temp+=x[i];
    if(x[i]!==x[x.length-1]){
      temp+=y;
    }
  }
  return temp;
}

var array = ["oranges","apples"];
console.log(join2(array,","));
console.log(array.join());
console.log(" ");
console.log(join2(array," and "));
console.log(array.join(" and "));

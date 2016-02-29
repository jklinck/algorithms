//This is a longhand version of the built in JS function .split()

function split2(str){
  var array=[];
  var temp="";
  for(var i=0;i<str.length;i++){
    if(str[i]!==" "){
      temp+=str[i];
    }
    if(str[i]===" "){
      array.push(temp);
      temp="";
    }
  }
  array.push(temp);
  return array;
}

console.log(split2("hello world"));

// built in JS function
var x = "hello world";
y = x.split(" ");
console.log(y);



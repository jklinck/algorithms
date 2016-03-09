// Truncate first argument(str) with "..." if it's length is longer than second argument(num), 
// if num is less than 3 then do not add do not add '...' to the length of the string


function truncate(str, num) {
  var newStr="";
  if(num<=3){
      for(var j=0;j<num;j++){
          newStr+=str[j];
      }
      newStr+="...";
  }
  else if(str.length>num){
    for(var i=0;i<num-3;i++){
      newStr+=str[i];
    }
    newStr+="...";
  }
  else if(str.length<=num){
      newStr=str;
  }
  return newStr;
}

console.log(truncate('As',1));  // 'A...'
console.log(truncate("Hello",9)); //  'Hello'
console.log(truncate("Hello world",8)); // 'Hello'
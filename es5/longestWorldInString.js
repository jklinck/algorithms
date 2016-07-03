//This function takes in a string and finds the longest word

function longestWord(str){
  var max =0;
  var array = [];
  var temp = "";
  for(var i=0;i<str.length;i++){
    if(str[i]!==" "){
      temp+=str[i];
    }
    if(str[i]===" "){
      array.push(temp);
      temp="";
    }
    array.push(temp);
  }
  for(var j=0;j<array.length;j++){
    if(array[j].length>max){
      max=array[j].length;
      temp=array[j];
    }
  }
  
  return "the longest word is "+temp;
}

console.log(longestWord("a bb ccc dddd eeeee"));


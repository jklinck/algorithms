//Find the total of all numbers in a string
function addNum(str){
  var array = [];
  var temp = "";
  for(var i=0;i<str.length;i++){
      if(!isNaN(str[i]) && str[i]!==" "){
        temp=str[i];    
        if(!isNaN(str[i-1]) && str[i-1]!==" "){
      	temp="";
        } 
        if(!isNaN(str[i+1])){
             temp+=str[i+1];
        }
        if(temp!==""){
          array.push(temp);
        }
        temp="";
      }
  } //FOR LOOP ENDS HERE
    var total=0;
  for(var j=0;j<array.length;j++){
    total+=Number(array[j]);
  }
  return total;
}

var x = "There are 7 days in a week and 24 hours in a day.";
console.log(addNum(x));



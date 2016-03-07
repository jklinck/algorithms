// Algorithm that takes a sting and capitalizes the first letter in each word

function titleCase(str) {
  var arr=[];
  for(var j=0;j<str.length;j++){
      arr.push(str[j]);
  }
  var temp="";
  var newStr="";
  for(var i=0;i<arr.length;i++){
      if(i===0 || arr[i-1]===" "){
          temp=arr[i].toUpperCase();
          newStr+=temp;
      }
      else if(arr[i]===" "){
          newStr+=arr[i];
      }
     else if(arr[i]==="\'"){
         var x=arr[i].replace(/\\"/g, '"');
          newStr=newStr+x;
      }
      else{
          var y=arr[i].toLowerCase();
          newStr+=y;
      }
  }
  return newStr;
}

console.log(titleCase("hello world")); //will return "Hello World"
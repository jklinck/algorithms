// Return true if the string in the first element of the array contains all of 
// the letters of the string in the second element of the array

function mutation(arr) {
  var newArr=[];
  var temp;
  for(var i=0;i<arr.length;i++){
      temp=arr[i].toLowerCase();
      newArr.push(temp);
  }
  for(var j=0;j<newArr[1].length;j++){
      if((newArr[0]).indexOf(newArr[1][j])<0){
          return false;
      }
  }
  return true;
}

console.log(mutation(["hello", "hello"])); // returns true
console.log(mutation(["anything","any"]));  // returns true
console.log(mutation(["any","anything"]));  // returns false


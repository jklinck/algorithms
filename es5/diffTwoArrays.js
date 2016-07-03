// Algorithm that takes two arrays and return a new array that contains all 
// items that are not in both arrays

function diff(arr1, arr2) {
  var newArr = [];
  for(var i=0;i<arr1.length;i++){
    if(!contains(arr2,arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  for(var j=0;j<arr2.length;j++){
      if(!contains(arr1,arr2[j])){
          newArr.push(arr2[j]);
      }
  }
  return newArr;
}

// helper method to check if an array contains a value
function contains(arr,val){
  for(var i=0;i<arr.length;i++){
    if(arr[i]===val){
      return true;
    }
  }
  return false;
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));  // returns 4

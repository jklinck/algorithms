// Algorithm that takes a multi-dimensional array, finds the largest number in each 
// sub-array and creates a new array with those numbers

function largestOfFour(arr) {
  var maxArr=[];
  for(var i=0;i<arr.length;i++){
    var max=largestNum(arr[i]);
     maxArr.push(max);
  }
  return maxArr;
}

function largestNum(array){
  var max=array[0];
  for(var i=0;i<array.length;i++){
    if(array[i]>max){
      max=array[i];
    }
  }
  return max;
}

console.log(largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,37,39], [101,675,857,1]]));
// will return  [5,27,39,1001]

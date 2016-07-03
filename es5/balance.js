//Given an array of numbers return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side

function equals(array){
	var sum1 = 0;
	var sum2 = 0;
	var z;
	for(var i=0;i<array.length;i++){
	  sum2=0;
	  sum1+=array[i];
	  for(var j=i+1;j<array.length;j++){
	    sum2+=array[j];
	  }
	  if(sum1===sum2){
	    return true;
	}
}
	return false;
}
console.log(equals([1,2,1,3,1]));
console.log(equals([4,8,12]));
console.log(" ");
console.log(equals([1,2,1,3,1,7]));
console.log(equals([7,8,9]));

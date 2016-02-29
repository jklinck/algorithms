//This function takes in a string, finds all of the palindromes and returns the longest one

function longestPali(str){
	var array = str.split(" ");
	var paliArray = [];
	var longest = "";
	function isPali(x){
	  for(var i=0;i<x.length/2;i++){
	    if(x[i]!=x[x.length-i-1]){
	      return false;
	    }
	  }
	  return true;
	}
	for(var j=0;j<array.length;j++){
	  if(isPali(array[j])){
	    paliArray.push(array[j]);
	  }
	} 
	for(var k=0;k<paliArray.length;k++){
	  if(paliArray[k].length>longest.length){
	    longest=paliArray[k];
	  }
	}
	return longest;
}

console.log(longestPali("aba asdf rtyu hjkl civic oooooooooooooooooook"));

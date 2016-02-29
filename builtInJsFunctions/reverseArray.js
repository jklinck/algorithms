//This is a longhand version of the buit in javascript .reverse() method

function reverse2(x){
	for(var i=0;i<x.length/2;i++){
	  var temp=x[i];
	  x[i]=x[x.length-i-1];
	  x[x.length-i-1]=temp;
	}
	return x;
}

console.log(reverse2([1,2,3,4,5,6,7]));
	// built in JS function
	var array = [1,2,3,4,5,6,7];
	console.log(array.reverse());

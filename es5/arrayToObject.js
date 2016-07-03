
// take two arrays, make the indices of the first array to be the keys in an object and the second array to be the the values of the previously inserted keys

function arrToObj(arr1,arr2){
	var obj={};
	for(var i=0;i<arr1.length;i++){
		obj[arr1[i]]=arr2[i];
	}
	return obj;
}

console.log(arrToObj(["name","age"],["John",34]));
function bubbleSort(arr){
	var temp;
	var i;
	var j = arr.length;
	while(j>0){
		for(i=0;i<arr.length-1;i++){
				if(arr[i]>arr[i+1]){
					temp = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = temp;
				}
		}
		j--;
	}
	return arr;
}


var array = [ 54,35,43,79,7,87,32,89,87,82,15,98,31,72,70];

console.log(array);
console.log(bubbleSort(array));








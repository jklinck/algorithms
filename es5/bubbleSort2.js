function bubble(arr){
	var counter = 0; 
	var temp;
	var n = arr.length - 1;
	while(n > 0){
		for(var i = 0;i < n;i++){
			temp = arr[i];
			temp2 = arr[i + 1];
			if(arr[i] > arr[i+1]){
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
			counter++; // keeps track of iterations through the for loop to see Big O run time
		}
		n--; // by decrementing "n" we are not looping through the already sorted portions at the end of the array
	}
	var answer = ["n: "+ arr.length,"n^2: " + (arr.length)*(arr.length),"Big O: (n^2)/2","actual Big O: " + counter,"Sorted array: "+arr];
	return answer.join("\n");
}

var array = [6,5,4,3,2,1];


console.log("Original array:", array);
console.log(bubble(array));










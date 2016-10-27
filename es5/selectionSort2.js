// Another variation of selection sort

function selSort(arr){
	var min = arr[0];
	var count = 0;
	var temp;
	var i = 0;
	while(count < arr.length){
		for(;i < arr.length;i++){
			if(arr[i] < min){
				min = arr[i];
				temp = i;
			}
		} // end of for loop
		arr[temp] = arr[count];
		arr[count] = min;
		count++;
		i = count; // the for loop only looks through the unsorted indices of the array
		min = arr[count]; // min is initially set to arr[0] then arr[1] then arr[2] and so on
	} // end of while loop
	return arr;
}

var x = [2,5,4,1,3];

console.log(selSort(x));





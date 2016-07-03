/* Algorithm that takes a multi dimensional array that is representing a matrix 
finds the sum of each diagonal and finds the difference between those two sums. 

For example:
var arr = [[11,2,4],[4,5,6],[10,8,-12]];
visually this looks like
11   2    4
4    5    6
10   8    -12

Thus the two diagonals are (11,5,-12) and (4,5,8).

*/

function diagonals(arr){
	var x=0;
	var y=arr.length-1;
	var diag1=0;
	var diag2=0;
	for(var i=0;i<arr.length;i++){
		diag1+=(arr[i][x]);
		x++;
	}
	for(var j=0;j<arr.length;j++){
		diag2+=(arr[j][y]);
		y--;
	}
	var difference=diag1-diag2;
	if(difference<0){
		difference*=(-1);
	}
	return difference;
}

console.log(diagonals([[11,2,4],[4,5,6],[10,8,-12]])); // should return 15
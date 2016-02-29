//This is an unknown sorting algoritm
function sort(x){
	var temp;
	var temp2;
	var temp3;
	var temp4;
	for(var i=0;i<x.length;i++){
		if(x[i]>x[i+1]){
			temp=x[i];
			temp2=x[i+1];
			x[i]=temp2;
			x[i+1]=temp;
			}
			for(var j=x.length-1;j>=0;j--){
				if(x[j]<x[j-1]){
					temp3=x[j];
					temp4=x[j-1];
					x[j]=temp4;
					x[j-1]=temp3;
				}
			}
	}
	return x;
}

var arr=[100,2,90,72,60,45];
var array=[6,5,4,3,2,1];
console.log(sort(arr));
console.log(sort(array));

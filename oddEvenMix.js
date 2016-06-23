// Algorithm that looks at every digit in a number and returns whether it is 
// all odds, all evens or a mix and keeps track of how many are even, odd or a mix

// For example if we have numbers 19-23
// 19 is all odd, 20 is all even, 21 is a mix, 22 is even and 23 is a mix
// thus we have 1 odd, 2 mix and 2 even

function mixed(x,y){
	var mix=0;
	var odd=0;
	var even=0;
	var arr=[];
	var tempArr=[];
	var temp="";
	for(var i=x;i<y+1;i++){
		temp+=i;
		for(var j=0;j<temp.length;j++){
			if(temp[j]%2===0){
				tempArr.push("even");
			}
			else{
				tempArr.push("odd");
			}
		}
		arr.push(tempArr);
		tempArr=[];
		temp="";
	}
	for(var k=0;k<arr.length;k++){
		if(arr[k][0]=="odd" && arr[k].indexOf("even")>-1){
			mix++;
		}
		else if(arr[k][0]=="even" && arr[k].indexOf("odd")>-1){
			mix++;
		}
		else if(arr[k][0]=="odd"){
			odd++
		}
		else{
			even++;
		}

	}
	return ("mix:"+mix+", even:"+even+", odd:"+odd);
}

console.log(mixed(19,23));  // should be    mix:2, even:2 ,odd:1

//  I'm pretty sure this algorithm is correct, I just want to do some more testing 
// to make sure




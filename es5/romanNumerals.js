// main function
function convertToRoman(num){
	var answer;
	var arr = split(num);
	if(arr.length==1){
		return oneDigit(arr);
	}
	else if(arr.length==2){
		answer = (twoDigits(arr))+(oneDigit(arr));
		return answer;
	}
	else if(arr.length==3){
		answer = (threeDigits(arr))+(twoDigits(arr))+(oneDigit(arr));
		return answer;
	}
	else{
		answer = (fourDigits(arr))+(threeDigits(arr))+(twoDigits(arr))+(oneDigit(arr));
		return answer;
	}
}

// split number into an array
function split(num){
	var newArr=(""+num).split("");
	return newArr;
}

function oneDigit(num){
	var end = num.length-1;
	if(num[end]==1){   
		return "I";
	}
	else if(num[end]==2){
		return "II";
	}
	else if(num[end]==3){
		return "III";
	}
	else if(num[end]==4){
		return "IV";
	}
	else if(num[end]==5){
		return "V";
	}
	else if(num[end]==6){
		return "VI";
	}
	else if(num[end]==7){
		return "VII";
	}
	else if(num[end]==8){
		return "VIII";
	}
	else if(num[end]==9){
		return "IX";
	}
	else if(num[end]==0){
		return "";
	}
}

function twoDigits(num){
	var second = num.length-2;
	if(num[second]==1){
		return "X";
	}
	else if(num[second]==2){
		return "XX";
	}
	else if(num[second]==3){
		return "XXX";
	}
	else if(num[second]==4){
		return "XL";
	}
	else if(num[second]==5){
		return "L";
	}
	else if(num[second]==6){
		return "LX";
	}
	else if(num[second]==7){
		return "LXX";
	}
	else if(num[second]==8){
		return "LXXX";
	}
	else if(num[second]==9){
		return "XC";
	}
	else if(num[second]==0){
		return "";
	}
}

function threeDigits(num){
	var third = num.length-3;
	if(num[third]==1){
		return "C";
	}
	else if(num[third]==2){
		return "CC";
	}
	else if(num[third]==3){
		return "CCC";
	}
	else if(num[third]==4){
		return "CD";
	}
	else if(num[third]==5){
		return "D";
	}
	else if(num[third]==6){
		return "DC";
	}
	else if(num[third]==7){
		return "DCC";
	}
	else if(num[third]==8){
		return "DCCC";
	}
	else if(num[third]==9){
		return "CM";
	}
	else if(num[third]==0){
		return "";
	}
}

function fourDigits(num){
	var fourth = num.length-4;
	if(num[fourth]==1){
		return "M";
	}
	else if(num[fourth]==2){
		return "MM";
	}
	else if(num[fourth]==3){
		return "MMM";
	}
	// the tests on free code camp didn't go above 3,999
}

console.log(convertToRoman(1000));
// there is an issue where node.js isn't returning anything for zero yet browswer javascript is returning "undefined", I fixed this issue with using == instead of === for checks against zero, being that once the number is split into and array with the split function in the main function it is actally a string and not a number, I found you can use the == if you do the comparison against zero as a string '0' rather than zero as a number




// Given a string, return all of the anagrams it can produce. 

function anagrams(str){
	var temp="";
	var arr=[];
	for(var i=0;i<str.length;i++){
		arr.push(str[i]);
	}
	return arr;
}

// THIS IS INCOMPLETE!!!!!!!!!!!!!!!!!!!!!!!!!!


var x="car";
console.log(anagrams(x));
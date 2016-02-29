//this is a date converter that takes in a date in the form 12/31/2015 and converts it to 20151231

function formatDate(userDate){
	var x=[];
	var year="";
	var monthDay="";
	for(var i=0;i<userDate.length;i++){
		if(userDate[i]!=="/" && x.length<2 && userDate[i]!=="0"){
			monthDay+=userDate[i];
		}
		if(userDate[i]==="0" && userDate[i-1]==="1" && x.length<2){
			monthDay+=userDate[i];
		}
		if(userDate[i]==="/"){
			x.push(userDate[i]);
		}
		if(x.length>1 && userDate[i]!=="/"){
			year+=userDate[i];
		}
	}
	return year+monthDay;
}

// checks for zeros before month or day
console.log(formatDate("07/08/2015"));
console.log("201578");
console.log("----------");
//checks for no zeros before month or day
console.log(formatDate("7/8/2015"));
console.log("201578");
console.log("----------");
//checks for double digit month and day
console.log(formatDate("12/12/2015"));
console.log("20151212");
console.log("----------");
// checks for October 10th
console.log(formatDate("10/10/2015"));
console.log("20151010");
console.log("----------");


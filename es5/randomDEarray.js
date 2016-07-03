
// push ten random arrays into a larger array that each have ten randomly generated "d" or "e" in them
	var mainArray = [];
	for(var j=0;j<10;j++){
	  var subArray = [];
	  for(var i=0;i<10;i++){
	    var num = Math.random();
	    if(num>=0.5){
	      subArray.push("d");
	    }else{
	      subArray.push("e");
	    }
	  }
	  mainArray.push(subArray);
	}
	console.log(mainArray);

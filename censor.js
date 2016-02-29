//Create a function that takes two parameters. The first a word to censor and the second a string of text that may contain the word to be censored. Return the string with the censor word replaced with the correct length of randomly selected symbols


function censor(badWord,str){
	var x = [];
	var temp = "";
	for(var i=0;i<str.length;i++){
	  if(str[i]!==" "){
	    temp+=str[i];
	  }
	  if(str[i]===" "){
	    x.push(temp);
	    temp="";
	  }
	}
	if(temp!==""){
	  x.push(temp);
	}
	for(var j=0;j<x.length;j++){
  		if(x[j]===badWord){
    	var censored="";
    	for(var m=0;m<x[j].length;m++){
    		var rand = Math.random();
    		var replace=""
    		if(rand<0.1){
    			replace="!";
    		}
    		else if(rand<0.25){
    			replace="*";
    		}
    		else if(rand<0.5){
    			replace="#";
    		}
    		else if(rand<0.75){
    			replace="%";
    		}
    		else if(rand<1.0){
    			replace="$";
    		}
      		censored+=replace;
    	}
    	x[j]=censored;
  		}
	}
	var y = "";
	for(var k=0;k<x.length;k++){
	  y+=x[k];
	  if(k!==x.length-1){
	  	y+=" ";
	  }
	}
	return y;
}
  
console.log(censor("stuff","Hello world and stuff."));



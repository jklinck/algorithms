// Algorithm that takes in a string and returns a new string that only contains unique characters (ex: "aaabbcc" to "abc")

function unique(str){
    var newStr="";
    for(var i=0;i<str.length;i++){
    	if(!contains(newStr,str[i])){
    		newStr+=str[i];
    	}
    }
    return newStr;
}

function contains(str,val){
    for(var i=0;i<str.length;i++){
        if(str[i]===val){
            return true;
        }
    }
    return false;
}

var x = "aaabbcccccccccccccccccccccccccd!!!!!!";
console.log(unique(x));   // should return abcd!

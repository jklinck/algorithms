// Algorithm that takes in a string and returns a string that doesn't not contain any repeating letters, for example it will take in 'aabb' and return 'ab'

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

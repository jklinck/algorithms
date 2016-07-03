// Functions for reversing a string, replacing an index of a string, pushing 
// an element onto an array and removing the first element of an array


// reverse a string
function strReverse(str){
    newStr="";
    for(var i=str.length-1;i>-1;i--){
        newStr+=str[i];
    }
    return newStr;
}
// strReverse('abcd') will return 'dcba'




// replace an index of a string: it's arguments are a string, the index that you want 
//to update and a value of what you want that value of that index to be
function replStrIndex(str,index,val){
    var newStr="";
    for(var i=0;i<str.length;i++){
        if(i===index){
            newStr+=val;
        }
        else{
            newStr+=str[i];
        }
    }
    return newStr;
}
// replStrIndex('abcd',3,'e') will return 'abde'




// append/push a letter onto the end of a string
function strPush(str,val){
    return str+=val;
}




// pop/remove a letter from the end of a string
function strPop(str){
    var newStr="";
    for(var i=0;i<str.length-1;i++){
        newStr+=str[i];
    }
    return newStr;
}
// strPop("abcd")  will return "abc"

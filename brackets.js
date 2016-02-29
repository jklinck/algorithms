// Algorithm that checks a string to make sure all beginning brackets, parenthesis and curly brackets have a proper match with a closing bracket, parenthesis or curly bracket.

function brackets(string){
    var bracket=[];
    var paren=[];
    var curly=[];
    for(var i=0;i<string.length;i++){
        if(string[i]==="["||string[i]==="]"){
            bracket.push(string[i]);
        }
        else if(string[i]==="("||string[i]===")"){
            paren.push(string[i]);
        }
        else if(string[i]==="{"||string[i]==="}"){
            curly.push(string[i]);
        }
    }
    for(var j=0;j<bracket.length/2;j++){
        if(bracket[j]==="[" && bracket[bracket.length-j-1]!=="]"){
            return false;
        }
    }
    for(var k=0;k<paren.length/2;k++){
        if(paren[k]==="("&& paren[paren.length-k-1]!==")"){
            return false;
        }
    }
    for(var m=0;m<curly.length/2;m++){
        if(curly[m]==="{"&& curly[curly.length-m-1]!=="}"){
            return false;
        }
    }
  return true;
}


var x='asdf[()]asdf{}()';
var y='asdf[(]asdf{}';

console.log(brackets(x));//true
console.log(brackets(y));//false
// Cipher algorithm that takes a string a returns the letter that is 13 spots behind 
// it in the alphabet 

function cipher13(str) {
    var newStr="";
  var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  for(var i=0;i<str.length;i++){
      if((alpha.indexOf(str[i]))<0){
          newStr+=str[i];
      }
    for(var j=0;j<alpha.length;j++){
        if(j>12 && str[i]===alpha[j]){
              newStr+=alpha[j-13];
        }
        else if(j<=12 && str[i]===alpha[j]){
            newStr+=alpha[j+13];
        }
    }
  }
  return newStr;
}

console.log(cipher13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
// returns "The quick brown dog jumped over the lazy fox."

/*
Here is another idea of how to perform this.

var x = 13;

var phrase = 's';

var temp;
var temp2;
var temp3 = '';

var output = '';

for(var i=0;i < phrase.length;i++){
  if(phrase[i] == ' '){
    output += ' ';
  }
  else if(phrase[i] != ' '){
    temp = phrase[i];
    temp2 = temp.charCodeAt(0) + x;
    temp3 = String.fromCharCode(temp2);
    if(temp2 < 123){
      output += temp3;
    }
    else{
      temp2 = temp2 - 26;
      temp3 = String.fromCharCode(temp2);
      output += temp3;
    }
  }
}

console.log(output);
*/
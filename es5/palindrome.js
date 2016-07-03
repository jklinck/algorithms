// Palindrone algorithm, checks if a word is spelled the same backwards or forward, also 
// using RegEx to remove all non alphanumeric characters from the argument placed into 
// the function

function palindrome(str) {
	// first this strips all non alphanumeric characters and then switches all letters 
	// to lowercase
  var newStr=str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  for(var i=0;i<newStr.length/2;i++){
      if(newStr[i]!==newStr[newStr.length-i-1]){
          return false;
      }
  }
  return true;
}

palindrome("0_0 (: /-\ :) 0-0"); // true
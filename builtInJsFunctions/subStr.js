//This function mimics the js builit in substr method

	function substr2(str,a,b){
  	   var newStr="";
       for(var c=a;c<a+b;c++){
          newStr+=str[c];
       }
       return newStr;
    }
    console.log(substr2("hello world",1,4));

    // here is the built in function
    var x = "hello world";
    console.log(x.substr(1,4));


// fizzbuzz algorithm

	function fizzBuzz(num1,num2,statement1,statement2,statement3){
		for(var i=1;i<=100;i++){
			if(i%(num1)===0 && i%(num2)===0){
				console.log(statement3);
			}
			else if(i%(num1)===0){
				console.log(statement1);
			}
			else if (i%(num2)===0){
				console.log(statement2);
			}
			else{
				console.log(i);
			}
		}
	}


fizzBuzz(3,4,"fizz","buzz","fizzbuzz");

 

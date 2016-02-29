//This takes an integer and adds each number in the integer and stops when it is only one digit long

function digits(num){
    num=""+num;
   var arr=[];
   for(var i=0;i<num.length;i++){
       arr.push(num[i]);
   }
   var sum =0;
   var temp;
   var temp2;
   for(var j=0;j<arr.length;j++){
       sum+=Number(arr[j]);
       temp=""+sum;
       if(temp.length<2){
           temp2=sum;
       }
   }
   return temp2;
}

var x = 12339;
console.log(digits(x));


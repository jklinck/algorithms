//this function takes an array as an argument and find which three indeces add up to the largest number and returns the index of the first number in the triplet that has the highest value 


function triplet(array){
    var max;
    var start;
    for(var i=0;i<array.length-2;i++){
        var temp=array[i]+array[i+1]+array[i+2]; 
        if(i===0){
            max=temp;
            start=i;
        }
        if(temp>max){
            max=temp;
            start=i;
        }
    } 
    return start;
}



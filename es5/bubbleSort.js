//This is the bubblesort algorithm

function bubbleSort(x){
    var temp;
    var temp2;
    var swap=false;
    var length=x.length;
    var count=0;
    for(var i=0;i<length;i++){
        temp=x[i];
        temp2=x[i+1];
        if(x[i]>x[i+1]){
            x[i]=temp2;
            x[i+1]=temp;
            swap=true;
        }
        while(i===length-1 && swap===true){
            i=-1;
            swap=false;
            length--;
        }
    }
    return x;
}

var arr=[100,2,71,72,60,45];
var array=[6,5,4,3,2,1];

console.log(bubbleSort(arr));
console.log(bubbleSort(array));



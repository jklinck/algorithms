//This is the selection sort algorithm

// function selectionSort(x){
// 	var min;
//     for(var i=0;i<x.length;i++){
//     	min=i;
//     	for(var j=i+1;i<x.length;j++){
//     		if(x[j]<x[min]){
//     			min=j;
//     		}
//     	}
//     	if(i!==min){
//     		var temp=x[i];
//     		x[i]=x[min];
//     		x[min]=temp;
//     	}
//     }
//    return x;
// }

function selectionSort(x){
    var min;
    var temp;
    console.log(x);
    console.log("---------------------");
    for (var i=0; i<x.length; i++){
        min = i;
        for (var j=i+1; j<x.length; j++){
            if (x[j] < x[min]){
                min = j;
            }
        }
        if (i != min){
            temp=x[i];
            x[i]=x[min];
            x[min]=temp;
        }
        console.log(x)
    }
    //return x;
}

var a=[1,2,3,4,6,5];
var b=[6,5,4,3,2,1];
var c=[4,3,2,1,6,5];
console.log(selectionSort(c));

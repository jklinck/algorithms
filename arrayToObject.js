
// take two arrays, make the indices of the first array to be the keys in an object and the second array to be the the values of the previously inserted keys

var x = ["name","age"];
var y = ["John",34];
var z = {};
for(var i=0;i<x.length;i++){
   z[x[i]]=y[i];
}
console.log(z);
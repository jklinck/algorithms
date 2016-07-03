// function takes two arguments, first is a an array of objects and the second is a single object, if any of the objects in the first agrument match the object from the second argument then return the matching object from the first argument

function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKey=Object.keys(source);
  for(var i=0;i<collection.length;i++){
  	var keys=Object.keys(collection[i])
  	for(var j=0;j<keys.length;j++){
  		if(keys[j]===sourceKey[0]){
  			console.log(collection[i]);
  		}
  	}
  }
  // Only change code above this line
  //return arr;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
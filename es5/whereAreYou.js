// function takes two arguments, first is a an array of objects and the second is a single object, if any of the objects in the first agrument match the object from the second argument then return the matching object from the first argument

function whereAreYou(collection, source) {
  var arr = [];
  var sourceKey=Object.keys(source);
  // return sourceKey;  returns "last"
  for(var i in collection){
     for( var j in collection[i]){
       if(j==sourceKey && collection[i][j]===source[sourceKey]){
         arr.push(collection[i]);
       }
     }
  }
  return arr;
}

console.log(whereAreYou([{ first: "Romeo", last: "Montague" }, 
             { first: "Mercutio", last: null }, 
             { first: "Tybalt", last: "Capulet" }], 
                   { last: "Capulet" }));
// Algorithm takes two strings as arguments and checks if the first string ends with the 
//second string

function end(str, target) {
    var x=str.split("");
    var y=target.split("");
    x.reverse();
    y.reverse();
    for(var i=0;i<y.length;i++){
        if(x[i]!==y[i]){
            return false;
        }
    }
    return true;
}

end("Bastian", "n"); // returns true
end("Bastian","e");  // returns false
end("He has to give me a new name", "name");  // returns true
end("He has to give me a new name", "me");   // returns true

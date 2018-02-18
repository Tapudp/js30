console.log(__dirname);
console.log(__filename);

//normal function statement
// function sayHi(){
//     console.log('hi');
// }

// sayHi();

function callFunction(fun){
    fun();
}

// functions experessions
var sayBye = function(){
    console.log('bye');
}

sayBye();
callFunction(sayBye);
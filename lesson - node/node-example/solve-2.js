var rect = require('./rectengle-2');

function solveRect(l,b){
    rect(l,b,function(err,rectangle){
        if(err){
            console.log(err);
        }
        else{
            console.log("perimeter: " + rectangle.perimeter());
            console.log("area: " + rectangle.area());
        }
    })
};


solveRect(2,4);
console.log();
solveRect(3,5);
console.log();
solveRect(-3,5);
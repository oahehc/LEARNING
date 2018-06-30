var argv = require('yargs')
    .usage('Usage: node $0 --l[num] --b=[num]')
    .demand(['l','b'])
    .argv;


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


solveRect(argv.l,argv.b);
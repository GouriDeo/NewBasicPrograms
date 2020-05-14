/**
 * var fs = require('fs');
var file = "pizza.txt"
console.log('Program started');
var data = fs.readFileSync(file);
console.log('Program ended');
 */
var fs = require('fs');
var file = "pizza.txt"
console.log('Program started');
fs.readFile(file, function(err, info){
    if(err){
        throw err;
    }
    else{       
            console.log(info.toString());   
    }
});
console.log('Program ended');
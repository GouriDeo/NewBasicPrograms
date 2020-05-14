var counter = 0;
function add(){  
    function inner(){
        counter+=1;
        return counter;
    }
    return inner();
}

console.log(add());
console.log(add());
console.log(add());






var file = 'fileOfNumber.txt'
var bubble = require('./bubbleSort')
const fs = require('fs')

readForSort();
function readForSort(){
    fs.exists(file,function(exist){
        if(exist){
            fs.stat(file, function(err,statCheck){
                if(statCheck.isFile()){
                    fs.readFile(file, function(err,data){
                        if(err){
                            throw err
                        }
                        else{
                            const arrayData = data.toString().split(", ");
                            const numberArray = arrayData.map(Number);
                            bubble(numberArray, function(sortedData){
                                console.log(sortedData);
                            })
                        }
                    })
                }
            })
        }
    })
}

var fs = require('fs');
var file = 'fileOfNumber.txt';
/* The function readFile will return the new function which will have
   two more function resolve and reject.
*/
function readFile() {
    return new Promise(function (resolve, reject) {
        //check for error
        try {
            // will check file exists or not
            fs.exists(file, function (exist) {
                if (exist) {
                    resolve(exist);
                }
                else {
                    reject(exist)
                }
            })
        } catch (error) {
            console.log(reject(error));
        }
    })
    .then((exist)=>{
        console.log('exist: '+exist);
        return new Promise(function(resolve, reject){
            //status check
            if(exist){
                fs.stat(file, function(err, statCheck){
                    if(statCheck){
                        console.log('inside exist: '+statCheck.isFile());  
                        resolve(statCheck);
                    }
                    else{
                        reject(err)
                    }
                })
            }
        })
        
    })
    .then((statC)=>{
        return new Promise(function(resolve, reject){
            try {
                //print ststus
                console.log(statC);
                fs.readFile(file, function(err, data){
                    resolve(data);
                })
            } catch (error) {
                
            }
        })
    })
    .then((dataFromPreviousFunction)=>{
        //take data from that file
        var array = dataFromPreviousFunction.toString().split(", ");
        var newArray = array.map(Number);
        return bubbleSort(newArray);
    })
    .then((sortedArrar)=>{
        console.log(sortedArrar);        
    })
}
readFile();
//function for bubble sorting the numbers.
function bubbleSort(arr){
    return new Promise(function(resolve, reject){
        try {
            console.log(arr);
            var len = arr.length,
            i, j, stop;
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (arr[j] > arr[j+1]){
                    swap(arr, j, j+1);
                }
            }
        }
            resolve(arr);
        } catch (error) {
            reject(error)
        }
    })
}
//function for swaping of number
function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}


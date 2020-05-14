var file = 'fileOfNumber.txt'
var bubble = require('./bubbleSort')
const fs = require('fs')

 readForSort();
 function readForSort(){
     fs.exists(file, function(exist){
         if(exist){
             fs.stat(file, function(err, statCheck){
                 console.log(statCheck);
                 if(statCheck.isFile()){
                     fs.readFile(file, function(err, data){
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
 readForSort();
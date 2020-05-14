const fs = require('fs');
const util = require('util');
var file = 'file.txt'

var existsFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readFile);


existsFile(file)
.then((exists)=>{
    if(exists){
    console.log(exists);
    return statCheck(file)
    }
})
.then((statCh) => {
    if(statCh){
        console.log(statCh.isFile());
        return readFile(file);
    }
})
.then((info) =>{
    console.log(info.toString());
})
.catch(() =>{
    console.log('error');
})

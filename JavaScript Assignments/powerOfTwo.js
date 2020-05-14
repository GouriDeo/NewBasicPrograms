const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
let answer=1;
rl.question(`Enter the power \n`,(power)=>{
    if(power<31){
        for(var i=0; i<=power; i++){
            for(var j=0; j<i; j++){
                answer=answer*2;
            }
          console.log('2^'+i+' = '+answer);
        }
    }
    else{
        console.log('Power should be less than 31')
    } 
    rl.close();
});
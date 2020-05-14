const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
let harmonicValue=0;
rl.question(`Enter the number \n`,(value)=>{
    if(value!=0){
        for(var i=1; i<=value; i++){
             harmonicValue=harmonicValue+(1/i);
        }
        console.log(harmonicValue);
    }
    else(
        console.log('Number should be greater than 0.')
    )
rl.close();
});
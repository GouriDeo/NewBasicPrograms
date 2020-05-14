const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
rl.question(`Enter the number \n`,(number)=>{
    console.log('Prime factors of the given number are ');
    for(var j=2;j<=number; j++){
        let count=0;
        for(var i=2; i<=j/2; i++){
            if(j%i==0){
                count++;
            }
        }
        if(count==0){
            if(number%j==0){
                console.log(j);
            }
        }
    }
    rl.close();
});
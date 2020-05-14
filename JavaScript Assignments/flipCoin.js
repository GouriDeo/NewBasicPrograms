const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
let head=0;
let tail=0;
let randomNumberIndex=1;
rl.question(`Enter how many time you want to flip the coin \n`,(numberOfFlips)=>{
    for(var i=0; i<numberOfFlips; i++){
         var random = math.random();
        console.log('Random number '+ randomNumberIndex+': '+random);
        if(random<0.5){
            tail++;
        }
        else{
            head++;
        }
        randomNumberIndex++;
    }
let percentageOfHead = (head*100)/numberOfFlips;
let percentageOfTail = (tail*100)/numberOfFlips;
console.log('percentage of heads '+percentageOfHead);
console.log('percentage of tails '+percentageOfTail);
rl.close();
});

    


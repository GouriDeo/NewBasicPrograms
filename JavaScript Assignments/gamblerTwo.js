let stake = 5;
let goal = 60;
let number = 21;
let win=0;
let lose=0;
for(var i=1; i<=number; i++){
    var random = Math.random();
    if(random<0.5){
        console.log(i+': Lose');
        stake=stake-1;
        lose++;
        console.log('stake: '+stake);
        console.log('______________');
    }
    else{
        console.log(i+': Win');
        stake=stake+1;
        win++;
        console.log('stake: '+stake);
        console.log('______________');
    }
    if(stake == 0){
        console.log('stake become zero');
        break;
    }
    else if(stake == goal){
        console.log('Reach the goal');
        break;
    }
}
let percentageOfWin = (win*100)/i;
let percentageOfLose = (lose*100)/i;
console.log('Percentage of win : '+percentageOfWin);
console.log('Percentage of loss :'+percentageOfLose);


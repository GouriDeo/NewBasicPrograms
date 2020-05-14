const readline = require('readline');
let couponNumberCount=1;
let random;
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
rl.question(`Enter the coupon number between range 1 - 50 \n`,(couponNumber)=>{
    if(couponNumber<=50){
        do{
             random= Math.round(Math.random()*(50-1));
            console.log(random);
            couponNumberCount++;
        }while(couponNumber!=random);
        console.log(''+couponNumberCount);
    }
    else{
        console.log('Enter valid coupon number');
    }
    rl.close();
});
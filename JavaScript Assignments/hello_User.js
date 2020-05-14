const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
rl.question(`Enter the name \n`,(userName)=>{
    if(userName.length>2){
        console.log('Hello '+userName+', How are you?');
        rl.close();
    }
    else{
        console.log('User name should have atleat 3 characters' );
    }
});



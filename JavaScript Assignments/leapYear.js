const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
typeof year;
rl.question(`Enter the year \n`,(year)=>{
    if(year.length==4){
        if(year%4==0 || year%100==0 && year%4!=0){
            console.log('The year '+year+' is leap Year');
        }
        else{
            console.log('The year '+year+' is not leap year');
        }     
    }
    else{
        console.log('Enter the year in correct format');
    }
    rl.close();
});

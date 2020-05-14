let array = [1,2,5,10,50,100,500,1000];
let change = 0;
let totalchangecount=0;
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
rl.question(`Enter the amount \n`,(amount)=>{
     totalAmount=amount;
    for( var i=array.length; i>=0; i--){
        let printnote=0;
        let notecount=0;
        if(array[i]!=amount || array[0]==amount){
            while(array[i]<=amount){
                change=change+array[i];          
                amount=amount-array[i];
                notecount++;
                totalchangecount++;
                printnote++;
                if(amount==0){
                    break;
                }
            }
        }    
        if(printnote>0){
            console.log(array[i]+' : '+notecount);
        }
    }
rl.close();
console.log('Total number of notes '+totalchangecount);
});

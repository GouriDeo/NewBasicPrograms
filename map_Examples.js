const productPrizes =[1,2,3,4,5,6,7,8,9,10];
/**
 * const newValues = productPrizes.map(x=>x*2);
console.log(newValues);

const newFilteredValues = productPrizes.filter(x=>x%2);
console.log(newFilteredValues);
**/
function getShortMessages(messages){
    const newFilter = messages.filter(x=> x.message.length<50);
    const newMap = newFilter.map(x=> x.message);
    console.log(newMap);
}
var messages = [
    {
        message:'Testing agutfytdfhjkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
    },
    {
        message:'Testing jhiuefhwojf'
    }
]
getShortMessages(messages);
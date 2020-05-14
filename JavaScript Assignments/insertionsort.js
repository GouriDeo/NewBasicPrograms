let array = [4,8,1,6,9,2]
for(var i=1;i<array.length;i++){
    var temp = array[i];
    let j=i;
    while(j>0 && array[j-1]>temp){
        array[j] = array[j-1];
        j--;
    }
    array[j] = temp;
}
console.log(array);
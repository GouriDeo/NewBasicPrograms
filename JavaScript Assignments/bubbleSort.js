const array = [5,9,1,4,6,7];
for(var i=0;i<array.length;i++){
    var flag=0;
    for(var j=0;j<array.length-1-i;j++){
        if(array[j]>array[j+1]){
            var temp = array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
            flag=1;
        }
    }
    if(flag==0){
        break;
    }
}
console.log(array);
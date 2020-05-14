let array = [0,-1,-4,2,-3,1,5,8];
for(var i=0; i<array.length; i++){
    for(var j=i+1; j<array.length; j++){
        for(var k=j+1; k<array.length;k++){
            if(array[i]+array[j]+array[k]==0){
                console.log('('+array[i]+' '+array[j]+' '+array[k]+')');
            }
        }
    }
}
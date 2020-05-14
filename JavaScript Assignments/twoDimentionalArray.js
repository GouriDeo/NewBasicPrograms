let array = [8,2,7,9,5,6,3,1,4];
let row = 3;
let column = 3;
let input=0;
let myarray = [];
for(var i=0; i<row; i++){
    myarray[i] = [];
    for(var j=0; j<column; j++){
        myarray[i][j] = array[input];
        input++
    }
}
console.log(myarray);


function newData(callback){
    var dataOne = 'Hello everyone.';
    var dataTwo = 'Whats up?';
    callback(dataOne);
    callback(dataTwo);

}
newData(function(a){
    console.log(a);
})
newData(function(b){
    console.log(b);
})
function intro(callback){
    setTimeout(function(){
        console.log('Hello');
        callback();
    }, 5000);
}

function name(n){
    setTimeout(function(){
        console.log('Gouri');
    },1000);
}
intro(name);

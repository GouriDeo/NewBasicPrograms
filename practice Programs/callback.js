function intro(callback){
    setTimeout(function(){
        console.log('Hello');
        callback(101);
    }, 5000);
}

function name(n){
    setTimeout(function(){
        console.log('Gouri' +n);
    },1000);
}
intro(name);

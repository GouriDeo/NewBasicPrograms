
var like = (function(){
    var counter = 0;
    return function (){
        counter=counter+1;
        return counter;
    }
   
})();
console.log(like());
console.log(like());
console.log(like()); 
function outer() {
    var b = 10;
    var c = 100;
       function inner() {           
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
        }
        return inner;
    }
    var X = outer();  
    var Y = outer();  

    X(); 
    X();
    X();

    Y();
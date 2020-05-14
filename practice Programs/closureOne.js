function outer() {
    var b = 10;
    var c = 100;
    return function () {
        var a = 20;
        console.log("a= " + a + " b= " + b);
        a++;
        b++;
    }
}
var X = outer();
var Y = outer();

X();
X();
X();

Y();
//Declare Variable
var val1 =  9 ;
var val2 = 10 ;
var myName = "Narto" ;

//Document Object
document.getElementById("my-btn").addEventListener("click",
function() {
    myfuntion(myName, a, b)
}) ;

//Your Function, hy remember your function
function myFunction(name, a, b) {
    var value = a * b;
    var join = name+": "+value ;
   document.getElementById("value-demo").innerHTML = join ;
}
//global
var a=10
console.log(a)
function f1(){
    console.log("inside:"+a)
}
f1()

//local 
function f2(){
    b=100
    console.log("inside:"+b)
}
f2()
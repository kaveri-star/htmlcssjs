//function takes arguments
f1=function(a){
    console.log(a)
    return function(b){
        console.log(a+b)
        console.log(a-b)
        console.log(a*b)
    }
}
f=f1(10)
f(5)
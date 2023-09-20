//higher order function
f1=function(){
    console.log("outer function")
    return function(){
        console.log("inner function")
    }
}
//calling inner function
f2=f1()
f2()
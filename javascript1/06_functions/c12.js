function f1(){
    a=10
    console.log(a)
    function f2(){
        b=20
        console.log(b)
    }
    return f2
}
f3 = f1()
f3()

console.log("after deleting parent")
delete f1
f3()
f1()
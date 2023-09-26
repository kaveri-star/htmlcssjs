var l1={
    a:"kaveri",
    b:"hari"
}
console.log(l1)
f1=function(){
    console.log(this.a,this.b)
}
f1.call(l1)
var l2={
    a:"kaveri",
    b:"sai"
}
f1.call(l2)
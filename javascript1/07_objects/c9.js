//call()

var l1={
    fName:"kaveri",
    lName:"anapareddy",
    f1:function(){
        console.log(this)
        console.log(this.fName,this.lName)
    }
}
console.log(l1)
l1.f1()

var l2={
    fName:"sai",
    lName:"krishna"
}
l1.f1.call(l2)
console.log(l2)

var l3={
    fName:"sai",
    lName:"kaveri"
}
l1.f1.call(l3)
console.log(l3)

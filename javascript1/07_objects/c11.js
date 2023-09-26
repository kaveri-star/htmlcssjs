//apply,bind,call
var l1={
    fName:"kaveri",
    lName:"hari",
    f1:function(age,contact){
        console.log(this.fName,this.lName)
        console.log(age,contact)

    }
}
console.log(l1)

l1.f1.call(l1,21,9876543210)

l1.f1.apply(l1,[21,9876543210])


var b=l1.f1.bind(l1,31,9876543210)
b()
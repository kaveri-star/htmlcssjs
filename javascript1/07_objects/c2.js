//using this keyword refers to the current objects
var l1={
    name:"kaveri",
    age:"23",

    display:function(){
        console.log(this)
        console.log(this.name+" "+this.age)

        console.log("direct calling : "+ this)
        console.log("calling using this : "+this.name+" "+this.age)
    }
}
console.log(l1)
//calling funtion outside scope of object
l1.display()

console.log(l1.name+" "+l1.age)





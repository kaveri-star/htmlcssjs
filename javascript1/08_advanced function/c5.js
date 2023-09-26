//rest and spread operator

var ob1={
    name:"sai krishna",
    age:21,
    contact:4567890123,
    address:"hyd"
}
console.log(ob1)

var{name,...r}=ob1
console.log(ob1)


var obj2={
    ...ob1,
    age:28
}
console.log(obj2)
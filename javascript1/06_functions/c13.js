//callback functions
function f1(firstName,lastName){
    console.log(firstName+" "+lastName)
}
//f1("sai","krishna")
function f2(firstName,lastName){
    //key = value
    fName=firstName
    lName=lastName
    f1(fName,lName)
}
f2("sai","kaveri")
f2("sai","krishna")


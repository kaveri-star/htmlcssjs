//function with arguments and template strings
function f1(fname,lname){
    console.log("first name is",fname,"last name is",lname)
    console.log(`first name is ${fname} last name is ${lname}`)
}
f1("sai","krishna")

//assigning variable to function

f2=function(fname,lname){
    console.log("first name is",fname,"last name is",lname)
    console.log(`first name is ${fname} last name is ${lname}`)
}
f2("sai","krishna")


//arrow function without arguments
f3=(fname,lname) =>{console.log("first name is",fname,"last name is",lname)}
f3("sai","krishna")

f4=(fname,lname) =>{console.log(`first name is ${fname} last name is ${lname}`)}
f4("sai","kaveri")

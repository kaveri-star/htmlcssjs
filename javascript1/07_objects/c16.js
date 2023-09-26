//case study
employee = [
    {"fName":"sai","lName":"krishna","age":21,"salary":10000},
    {"fName":"sai","lName":"kaveri","age":25,"salary":50000},
    {"fName":"kaveri","lName":"hari","age":36,"salary":70000},
    {"fName":"sai","lName":"latha","age":31,"salary":20000}
]

console.log(employee)
console.log(typeof(employee))


//get employee age<31 (filter)

function agevalues(age){
    return age<30
}

console.log(employee.filter(agevalues))

//get first and last name of employee(map)

//sum of salaries of all employee (reduce)
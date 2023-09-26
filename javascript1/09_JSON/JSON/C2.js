//object
var obj1 = {
    firstName: "Sai",
    lastName : "Kiran",
    email : "sai@gmail.com",
    contact :  98765432120
}
console.log(obj1)
console.log(typeof(obj1))

// firstName: 'Sai',
// lastName: 'Kiran',
// email: 'sai@gmail.com',
// contact: 98765432120
// }
// object

var objJSON = JSON.stringify(obj1)
console.log(objJSON) // {"firstName":"Sai","lastName":"Kiran","email":"sai@gmail.com","contact":98765432120}
console.log(typeof(objJSON)) // string
console.log(objJSON.length)

var obj2 = JSON.parse(objJSON) 
console.log(obj2) 
console.log(typeof(obj2))

// {
//     firstName: 'Sai',
//     lastName: 'Kiran',
//     email: 'sai@gmail.com',
//     contact: 98765432120
// }
// object
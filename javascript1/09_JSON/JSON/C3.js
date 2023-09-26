//object
var obj1 = {
    firstName: "Sai",
    lastName : "Kiran",
    email : "sai@gmail.com",
    contact :  98765432120,
    devices : ['mobile', 'laptop', 'desktop', 'ipad', 'tablet']
}

var objJSON = JSON.stringify(obj1)
console.log(objJSON) // {"firstName":"Sai","lastName":"Kiran","email":"sai@gmail.com","contact":98765432120}
console.log(typeof(objJSON)) // string

//replace(old, new
var r = objJSON.replace("Sai", "Vamsi")
var r = objJSON.replace("Kiran", "Kumar")
console.log(r) 


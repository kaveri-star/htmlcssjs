//pure function
function f1(){
    n=5
    sqr=n*n
    return console.log(sqr)
}
f1(5)


//impure function
n=5
function f2(){
   
    sqr=n*n
    return console.log(sqr)
}
n=10
f2()

//pure function

function loginUser(userName,password){
    if(userName=="kav"&& password=="kav"){
        console.log("login success")
    }else{
        console.log("login failed")
    }

}
loginUser("kav","kav")

//impure function

function loginAdmin(userName,password){
    userName="developer"
    if(userName=="kav"&& password=="kav"){
        console.log("login success")
    }else{
        console.log("login failed")
    }

}
loginAdmin("kav","kav")
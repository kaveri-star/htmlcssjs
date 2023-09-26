l1=[10,20,30,40,50]
console.log(l1)

function f1(n1,n2,n3,n4){
    console.log(n1," ",n2," ",n3," ",n4)
}
f1(10,20,30,40)
f1()
f1(...l1)
f1(100,...l1)
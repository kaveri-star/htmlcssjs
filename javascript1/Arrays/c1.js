var l1=[1,2,3,4,5]
console.log(l1)
console.log(l1.length)
console.log(l1[0])
console.log(l1[1])
console.log(l1[2])
console.log(l1[3])
console.log(l1[4])

console.log(l1[5])
l1[0]=22
console.log(l1)
l1[5]=8
console.log(l1)
l1[7]=9
console.log(l1)
console.log(l1.length)

for(var i=0;i<l1.length;i++){
    console.log(l1[i])

}
var i=0
do{
    console.log(l1[i])
    i++
}while(i<l1.length)
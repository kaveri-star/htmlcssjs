//forEach
l1=[10,20,30,40,50]
console.log(l1)

l1.forEach(function(values){
    console.log(values)

})
l1.forEach(function(values,index){
    console.log(values,index)

})
function f2(values,index,element){
    console.log(values,index,element)
}
l1.forEach(f2)
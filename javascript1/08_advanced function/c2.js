//rest operator

function f2(x,y){
    console.log(x+y)
}
f2(10,20)

function f1(x,y,z,...args){
    console.log(x+y+z,"and",...args)
}

f1(10,20,30,40,50,60,70)
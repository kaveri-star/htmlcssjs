//Inheritance
class Parent{

    constructor(a, b){
        console.log(a, b)
    }
}

class Child extends Parent{

    constructor(c, d){
        super(10, 20)
        console.log(c, d)
    }

}

new Child(30, 40)

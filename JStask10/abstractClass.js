class Shape{

    constructor(){

        if(new.target === Shape){
            throw new Error("you can not create an object from abstract class!");
        }
    }

    getArea(){
        throw new Error("this is Abstract method!");
    }


}

class Rectangle extends Shape{

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

}

class Circle extends Shape{

    constructor(radius){
        super();
        this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius ** 2;
    }
    
}


// const shape = new Shape();
// Error: Cannot instantiate abstract class

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
// 50


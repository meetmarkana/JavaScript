class Shape{
    calculateArea(){
        return "Area.."
    }
}

class Circle extends Shape{
    calculateArea(r){
        let pie = 3.14 
        return "Area of circle = " +(2 * +pie * +r)
    }
}

class Rectangle extends Shape{
    calculateArea(l,b){
        return "Area of Rectangle = " + +l * +b
    }
}

class Square extends Shape{
    calculateArea(l){
        return "Area of square = "+ +l * +l
    }
}

const circle1 = new Circle
console.log(circle1.calculateArea(10))

const rectangle1 = new Rectangle
console.log(rectangle1.calculateArea(2,3))

const square1 = new Square
console.log(square1.calculateArea(10))


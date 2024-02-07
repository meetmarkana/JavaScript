class Shape{
    draw(){
        return "Drawing a Shape"
    }
}

class Circle extends Shape{
    draw(){
        return "Drawing a Circle"
    }
}

class Square extends Shape{
    draw(){
        return "Drawing a Square"
    }
}

const square1 = new Square
console.log(square1.draw())
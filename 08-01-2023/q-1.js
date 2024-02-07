class Car{
    constructor(brand,price,color){
        this.brand = brand
        this.price = price
        this.color = color
    }
}

class childCar extends Car{
    constructor(brand,price,color,safety){
        super(brand,price,color)
        this.safety = safety
    }
}

let car1 = new childCar("BMW","$1000","black",4.3)
console.log(car1)
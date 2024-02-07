class Car{
    brand = []
    setBrand(newbrand){
        this.brand = newbrand
    }
    disply(newone){
        this.setBrand(newone)
        console.log(this.brand)
    }
}

var mycar = new Car 
const car = ['hundai','honda','suzuki']
// mycar.setBrand()
mycar.displyBrand(car)
// console.log(mycar.brand)
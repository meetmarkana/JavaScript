class pAnimal{
    constructor(name,color,height){
        this.name = name
        this.color = color
        this.height = height
    }
}

class cAnimal extends pAnimal{
    constructor(name,color,height,weight){
        super(name,color,height)
        this.weight = weight
    }

    showAnimal(){
        console.log(`Name = ${this.name},  Color = ${this.color},  Height = ${this.height}, Weight = ${this.weight}`)       
    }


}

let animal1 = new cAnimal("Tiger","Yellow","2.2m","200kg")
let animal2 = new cAnimal("Elephant","grayish black","3m","2,700kg")

animal1.showAnimal()
animal2.showAnimal()

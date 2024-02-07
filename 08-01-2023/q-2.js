class parent{
    constructor(surname,religion){
        this.surname = surname 
        this.religion = religion
    }
}
class child extends parent{
    constructor(name,surname,religion){
        super(surname,religion)
        this.name = name
    }
}

let person1 = new child("ABC","XYX","XYZ")

console.log(`${person1.name},${person1.surname},${person1.religion}`)
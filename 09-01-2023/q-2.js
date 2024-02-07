class Animal{
    makeSound(){
        return "Sound.."
    }
}

class Dog extends Animal{
    makeSound(){
        return "Sound of Dog is Barking"
    }
}

class Cat extends Animal{
    makeSound(){
        return "Sound of Cat is meows"
    }
}

class Bird extends Animal{
    makeSound(){
        return "Sound of Cat is chriping"
    }
}

let dog1 = new Dog
console.log(dog1.makeSound())

let cat1 = new Cat
console.log(cat1.makeSound())

let bird1 = new Bird
console.log(bird1.makeSound())

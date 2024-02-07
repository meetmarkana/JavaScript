class Food{
    cook(){
        return "Method of cooking"
    }
}

class Pizza extends Food{
    cook(){
        return "Pizz....Backing"
    }
}

class Sushi extends Food{
    cook(){
        return "Sushi....Steaming"
    }
}

class Burger extends Food{
    cook(){
        return "Burger....Boiled"
    }
}

let pizza1 = new Pizza
console.log(pizza1.cook())

let Sushi1 = new Sushi
console.log(Sushi1.cook())

let burger1 = new Burger
console.log(burger1.cook())
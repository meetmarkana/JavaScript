function greet(name){
    return function(){
        return "Hello" + " " + name
    }
}
let name = document.getElementById("in").value 

console.log(greet(name)())